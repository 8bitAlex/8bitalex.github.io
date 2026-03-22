import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QuoteBanner } from '@/components/blocks/QuoteBanner'

describe('QuoteBanner', () => {
  it('renders children text inside a blockquote', () => {
    render(<QuoteBanner>The quote text</QuoteBanner>)
    expect(screen.getByText('The quote text')).toBeInTheDocument()
    expect(screen.getByRole('blockquote', { hidden: true }) ?? screen.getByText('The quote text').closest('blockquote')).toBeTruthy()
  })

  it('renders author name when no logo', () => {
    render(<QuoteBanner author={{ name: 'Antoine de Saint-Exupéry' }}>Quote</QuoteBanner>)
    expect(screen.getByText('Antoine de Saint-Exupéry')).toBeInTheDocument()
  })

  it('renders Image when logo is provided', () => {
    render(
      <QuoteBanner author={{ name: 'Org Name', logo: '/logo.png' }}>Quote</QuoteBanner>
    )
    expect(screen.getByAltText('Org Name')).toBeInTheDocument()
  })

  it('does not render author <p> when logo is provided', () => {
    render(
      <QuoteBanner author={{ name: 'Org Name', logo: '/logo.png' }}>Quote</QuoteBanner>
    )
    // The <p> with name only appears when there's no logo
    const paragraphs = screen.queryAllByText('Org Name')
    // Only the alt attribute should match, not a paragraph text node
    const pTags = paragraphs.filter((el) => el.tagName === 'P')
    expect(pTags).toHaveLength(0)
  })

  it('renders no author markup when author is not provided', () => {
    const { container } = render(<QuoteBanner>Quote only</QuoteBanner>)
    const figcaption = container.querySelector('figcaption')
    // figcaption exists but should be empty (no author content)
    expect(figcaption?.textContent?.trim()).toBe('')
  })

  it('applies custom className to wrapper', () => {
    const { container } = render(<QuoteBanner className="mt-8">Quote</QuoteBanner>)
    expect(container.firstChild).toHaveClass('mt-8')
  })

  it('has neutral background class', () => {
    const { container } = render(<QuoteBanner>Quote</QuoteBanner>)
    expect(container.firstChild).toHaveClass('bg-neutral-50')
  })
})
