import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import React from 'react'
import type { MDXEntry, Post } from '@/lib/mdx'

vi.mock('@/lib/mdx', () => ({
  loadPosts: vi.fn(),
  loadProjects: vi.fn(),
  BlogPost: {
    type: 'Article',
    author: { name: 'Alex Salerno', image: { src: '/alex.jpg' } },
  },
}))

vi.mock('@/components/Button', () => ({
  Button: ({ href, children, className, ...rest }: { href?: string; children?: React.ReactNode; className?: string; [key: string]: unknown }) => (
    <a href={href} className={className} {...rest}>{children}</a>
  ),
}))

const notFoundError = new Error('NEXT_NOT_FOUND')
vi.mock('next/navigation', () => ({
  notFound: () => { throw notFoundError },
}))

function makePost(overrides: Partial<Post & { href: string }> = {}): MDXEntry<Post> {
  const base: Post & { href: string } = {
    href: '/blog/test-post',
    title: 'My Article Title',
    description: 'Article description.',
    date: '2025-06-01',
    type: 'Article',
    icon: { prefix: 'fas', iconName: 'code' } as unknown as Post['icon'],
    image: { src: '/img.jpg' },
    author: { name: 'Alex Salerno', image: { src: '/alex.jpg' } },
    tags: [],
    ...overrides,
  }
  return { ...base, metadata: base }
}

describe('Blog tag page', () => {
  let loadPosts: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    const mdx = await import('@/lib/mdx')
    loadPosts = vi.mocked(mdx.loadPosts)
    loadPosts.mockResolvedValue([
      makePost({ href: '/blog/uppy', title: 'Uppy Post', tags: ['Uppy'] }),
      makePost({ href: '/blog/raid-1', title: 'Raid Post 1', tags: ['Raid'] }),
      makePost({ href: '/blog/raid-2', title: 'Raid Post 2', tags: ['Raid'] }),
    ])
  })

  it('renders only posts matching the tag', async () => {
    const TagPage = (await import('@/app/blog/tags/[tag]/page')).default
    const jsx = await TagPage({ params: Promise.resolve({ tag: 'raid' }) })
    render(jsx)
    expect(screen.getByRole('link', { name: 'Raid Post 1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Raid Post 2' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Uppy Post' })).not.toBeInTheDocument()
  })

  it('matches case-insensitively against the route param', async () => {
    const TagPage = (await import('@/app/blog/tags/[tag]/page')).default
    const jsx = await TagPage({ params: Promise.resolve({ tag: 'RAID' }) })
    render(jsx)
    expect(screen.getByRole('link', { name: 'Raid Post 1' })).toBeInTheDocument()
  })

  it('renders the topic eyebrow with the display name (preserved case)', async () => {
    const TagPage = (await import('@/app/blog/tags/[tag]/page')).default
    const jsx = await TagPage({ params: Promise.resolve({ tag: 'uppy' }) })
    render(jsx)
    expect(screen.getByText('Topic: Uppy')).toBeInTheDocument()
  })

  it('calls notFound for an unknown tag', async () => {
    const TagPage = (await import('@/app/blog/tags/[tag]/page')).default
    await expect(
      TagPage({ params: Promise.resolve({ tag: 'does-not-exist' }) })
    ).rejects.toBe(notFoundError)
  })

  it('generateStaticParams returns one param per unique lowercased tag', async () => {
    const { generateStaticParams } = await import('@/app/blog/tags/[tag]/page')
    const params = await generateStaticParams()
    const tags = params.map((p) => p.tag).sort()
    expect(tags).toEqual(['raid', 'uppy'])
  })

  it('generateMetadata returns title with the display name', async () => {
    const { generateMetadata } = await import('@/app/blog/tags/[tag]/page')
    const meta = await generateMetadata({ params: Promise.resolve({ tag: 'raid' }) })
    expect(meta.title).toBe('Raid — Blog')
  })

  it('generateMetadata calls notFound for an unknown tag', async () => {
    const { generateMetadata } = await import('@/app/blog/tags/[tag]/page')
    await expect(
      generateMetadata({ params: Promise.resolve({ tag: 'nope' }) })
    ).rejects.toBe(notFoundError)
  })
})
