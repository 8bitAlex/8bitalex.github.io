import { describe, expect, it } from 'vitest'
import { BlogPost } from '@/lib/mdx'
import { formatDate } from '@/lib/formatDate'

describe('BlogPost constant', () => {
  it('has type "Article"', () => {
    expect(BlogPost.type).toBe('Article')
  })

  it('has author name "Alex Salerno"', () => {
    expect(BlogPost.author.name).toBe('Alex Salerno')
  })

  it('has author image with alt text', () => {
    expect(BlogPost.author.image.alt).toBe('Alex Salerno Portrait')
  })
})

describe('formatDate (re-exported via lib/formatDate)', () => {
  it('is a function', () => {
    expect(typeof formatDate).toBe('function')
  })

  it('produces human-readable output for ISO date string', () => {
    const result = formatDate('2025-06-01')
    expect(result).toBe('June 1, 2025')
  })

  it('handles partial dates (year-month only)', () => {
    const result = formatDate('2025-01')
    expect(result).toBe('January 2025')
  })
})
