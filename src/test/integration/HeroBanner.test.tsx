import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HeroBanner from '@/components/sections/HeroBanner'

describe('HeroBanner', () => {
  it('renders an h1 with "Alex Salerno"', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Alex Salerno')
  })

  it('renders "Software Engineer." with red color class', () => {
    render(<HeroBanner />)
    const span = screen.getByText('Software Engineer.')
    expect(span).toHaveClass('text-red-700')
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
