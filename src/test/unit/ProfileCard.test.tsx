import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ProfileCard from '@/components/ProfileCard'

const mockImage = { src: '/alex-portrait.jpg', width: 400, height: 400 }

describe('ProfileCard', () => {
  it('renders an image', () => {
    const { container } = render(<ProfileCard image={mockImage} />)
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders the name text', () => {
    render(<ProfileCard image={mockImage} name="Alex Salerno" />)
    expect(screen.getByText('Alex Salerno')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<ProfileCard image={mockImage} name="Alex" subtext="Software Engineer" />)
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
  })

  it('applies textClassName to the overlay div', () => {
    const { container } = render(<ProfileCard image={mockImage} textClassName="sm:invisible" />)
    const overlay = container.querySelector('.sm\\:invisible')
    expect(overlay).toBeInTheDocument()
  })

  it('applies rounded-3xl class to outer container', () => {
    const { container } = render(<ProfileCard image={mockImage} />)
    expect(container.firstChild).toHaveClass('rounded-3xl')
  })

  it('applies object-cover class to image', () => {
    const { container } = render(<ProfileCard image={mockImage} />)
    expect(container.querySelector('img')).toHaveClass('object-cover')
  })

  it('applies custom className to outer container', () => {
    const { container } = render(<ProfileCard image={mockImage} className="my-cls" />)
    expect(container.firstChild).toHaveClass('my-cls')
  })
})
