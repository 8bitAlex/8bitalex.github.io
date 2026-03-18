import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialMedia } from '@/components/SocialMedia'

describe('SocialMedia', () => {
  it('renders a list with role="list"', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('renders three social links', () => {
    render(<SocialMedia />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('renders GitHub link with correct aria-label', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('GitHub link points to correct URL', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/8bitAlex')
  })

  it('renders LinkedIn link with correct aria-label', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('LinkedIn link points to correct URL', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/8bitalex/'
    )
  })

  it('renders Buy Me a Coffee link', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('link', { name: 'Buy Me a Coffee' })).toBeInTheDocument()
  })

  it('Buy Me a Coffee link points to correct URL', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('link', { name: 'Buy Me a Coffee' })).toHaveAttribute(
      'href',
      'https://www.buymeacoffee.com/8bitalex'
    )
  })

  it('applies white text class when invert=true', () => {
    render(<SocialMedia invert />)
    expect(screen.getByRole('list')).toHaveClass('text-white')
  })

  it('applies dark text class by default', () => {
    render(<SocialMedia />)
    expect(screen.getByRole('list')).toHaveClass('text-neutral-950')
  })
})
