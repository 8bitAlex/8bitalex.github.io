import HeroBanner from '@/components/sections/HeroBanner'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('HeroBanner', () => {
  it('renders an h1 with "Alex Salerno"', () => {
    render(<HeroBanner />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Alex Salerno')
  })

  it('renders "Software Engineer." in the SlotWord placeholder', () => {
    const { container } = render(<HeroBanner />)
    const placeholder = container.querySelector('.invisible')
    expect(placeholder?.textContent).toBe('Software Engineer.')
  })

  it('renders the SlotWord animated span with red color class', () => {
    const { container } = render(<HeroBanner />)
    expect(container.querySelector('.text-red-700')).toBeInTheDocument()
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
