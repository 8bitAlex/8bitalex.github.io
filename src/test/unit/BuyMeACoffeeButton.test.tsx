import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BuyMeACoffeeButton } from '@/components/BuyMeACoffeeButton'

describe('BuyMeACoffeeButton', () => {
  it('renders an anchor link', () => {
    render(<BuyMeACoffeeButton />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('links to the BuyMeACoffee URL', () => {
    render(<BuyMeACoffeeButton />)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.buymeacoffee.com/8BitAlex')
  })

  it('opens in a new tab', () => {
    render(<BuyMeACoffeeButton />)
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
  })

  it('renders an image with correct alt text', () => {
    render(<BuyMeACoffeeButton />)
    expect(screen.getByAltText('Buy Me A Coffee')).toBeInTheDocument()
  })

  it('image has correct dimensions', () => {
    render(<BuyMeACoffeeButton />)
    const img = screen.getByAltText('Buy Me A Coffee')
    expect(img).toHaveAttribute('width', '217')
    expect(img).toHaveAttribute('height', '60')
  })

  it('applies custom className to the image', () => {
    render(<BuyMeACoffeeButton className="rounded-lg" />)
    expect(screen.getByAltText('Buy Me A Coffee')).toHaveClass('rounded-lg')
  })
})
