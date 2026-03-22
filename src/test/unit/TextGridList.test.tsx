import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TextGridList } from '@/components/blocks/TextGridList'

const mockItems = [
  { title: 'Attention to Detail', text: 'We care about the small stuff.' },
  { title: 'Clean Code', text: 'Readable and maintainable.' },
  { title: 'Collaboration', text: 'Better together.' },
]

describe('TextGridList', () => {
  it('renders the section title', () => {
    render(<TextGridList title="Values" items={mockItems} />)
    expect(screen.getByText('Values')).toBeInTheDocument()
  })

  it('renders each item title with period appended', () => {
    render(<TextGridList title="t" items={mockItems} />)
    expect(screen.getByText('Attention to Detail.')).toBeInTheDocument()
    expect(screen.getByText('Clean Code.')).toBeInTheDocument()
    expect(screen.getByText('Collaboration.')).toBeInTheDocument()
  })

  it('renders each item description text', () => {
    render(<TextGridList title="t" items={mockItems} />)
    expect(screen.getByText('We care about the small stuff.')).toBeInTheDocument()
    expect(screen.getByText('Readable and maintainable.')).toBeInTheDocument()
  })

  it('renders the correct number of list items', () => {
    render(<TextGridList title="t" items={mockItems} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(mockItems.length)
  })

  it('passes invert to GridListItem affecting text color', () => {
    render(<TextGridList title="t" items={mockItems} invert />)
    const items = screen.getAllByRole('listitem')
    items.forEach((item) => {
      expect(item).toHaveClass('text-neutral-300')
    })
  })

  it('applies custom className to container', () => {
    const { container } = render(<TextGridList title="t" items={mockItems} className="my-cls" />)
    expect(container.firstChild).toHaveClass('my-cls')
  })
})
