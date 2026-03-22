import HeroBanner from '@/components/sections/HeroBanner'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('HeroBanner', () => {
  it('renders an h1 with "Alex Salerno"', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Alex Salerno')
  })

  it('renders "Software Engineer." with red color class', () => {
    render(<HeroBanner />)
    // SlotWord renders two spans: invisible placeholder + animated word
    const spans = screen.getAllByText('Software Engineer.')
    expect(spans.some((s) => s.classList.contains('text-red-700'))).toBe(true)
  })

  it('renders "Designer." text', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/Designer\./)).toBeInTheDocument()
  })

  it('renders "Innovator." text', () => {
    render(<HeroBanner />)
    expect(screen.getByText(/Innovator\./)).toBeInTheDocument()
  })

  it('heading is inside a max-w container', () => {
    const { container } = render(<HeroBanner />)
    // Container applies max-w-7xl
    const outer = container.querySelector('.max-w-7xl')
    expect(outer).toBeInTheDocument()
  })
})
