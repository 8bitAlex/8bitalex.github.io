import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Border } from '@/components/Border'

describe('Border', () => {
  it('renders children', () => {
    render(<Border>content</Border>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('renders as div by default', () => {
    const { container } = render(<Border>x</Border>)
    expect(container.firstChild?.nodeName).toBe('DIV')
  })

  it('renders as specified element via as prop', () => {
    const { container } = render(<Border as="article">x</Border>)
    expect(container.firstChild?.nodeName).toBe('ARTICLE')
  })

  it('applies top-border positioning classes by default', () => {
    const { container } = render(<Border>x</Border>)
    expect(container.firstChild).toHaveClass('before:top-0')
    expect(container.firstChild).toHaveClass('before:left-0')
  })

  it('applies left-border positioning classes when position="left"', () => {
    const { container } = render(<Border position="left">x</Border>)
    expect(container.firstChild).toHaveClass('before:h-6')
    expect(container.firstChild).toHaveClass('before:w-px')
  })

  it('applies white pseudo classes when invert=true', () => {
    const { container } = render(<Border invert>x</Border>)
    expect(container.firstChild).toHaveClass('before:bg-white')
  })

  it('applies dark pseudo classes when invert=false', () => {
    const { container } = render(<Border>x</Border>)
    expect(container.firstChild).toHaveClass('before:bg-neutral-950')
  })

  it('forwards extra HTML attributes', () => {
    render(<Border data-testid="border-wrap">x</Border>)
    expect(screen.getByTestId('border-wrap')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Border className="custom-cls">x</Border>)
    expect(container.firstChild).toHaveClass('custom-cls')
  })
})
