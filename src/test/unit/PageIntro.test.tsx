import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PageIntro } from '@/components/PageIntro'

describe('PageIntro', () => {
  it('renders the eyebrow text', () => {
    render(
      <PageIntro eyebrow="Blog" title="Articles">
        <p>desc</p>
      </PageIntro>
    )
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('applies red color class to eyebrow', () => {
    render(
      <PageIntro eyebrow="Blog" title="Articles">
        <p>desc</p>
      </PageIntro>
    )
    expect(screen.getByText('Blog')).toHaveClass('text-red-700')
  })

  it('renders the title as h1', () => {
    render(
      <PageIntro eyebrow="Blog" title="Articles and More">
        <p>desc</p>
      </PageIntro>
    )
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Articles and More')).toBeInTheDocument()
  })

  it('renders children below the title', () => {
    render(
      <PageIntro eyebrow="Blog" title="Title">
        <p>Child content here</p>
      </PageIntro>
    )
    expect(screen.getByText('Child content here')).toBeInTheDocument()
  })

  it('includes sr-only separator', () => {
    const { container } = render(
      <PageIntro eyebrow="e" title="t">
        <p>c</p>
      </PageIntro>
    )
    const srOnly = container.querySelector('.sr-only')
    expect(srOnly).toBeInTheDocument()
    expect(srOnly?.textContent).toBe(' - ')
  })

  it('applies text-center class when centered=true', () => {
    const { container } = render(
      <PageIntro eyebrow="e" title="t" centered>
        <p>c</p>
      </PageIntro>
    )
    // The outer Container gets the text-center class
    const outer = container.firstChild as HTMLElement
    expect(outer).toHaveClass('text-center')
  })
})
