import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import NotFound from '@/app/not-found'

describe('NotFound (404)', () => {
  it('renders "404" text', () => {
    render(<NotFound />)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders "Page not found" heading', () => {
    render(<NotFound />)
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
  })

  it('renders the explanatory message', () => {
    render(<NotFound />)
    expect(screen.getByText(/Sorry, we couldn/)).toBeInTheDocument()
  })

  it('renders a link to the home page', () => {
    render(<NotFound />)
    expect(screen.getByRole('link', { name: 'Go to the home page' })).toBeInTheDocument()
  })

  it('home link points to /', () => {
    render(<NotFound />)
    expect(screen.getByRole('link', { name: 'Go to the home page' })).toHaveAttribute('href', '/')
  })
})
