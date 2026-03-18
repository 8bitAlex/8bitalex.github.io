import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blockquote } from '@/components/Blockquote'

const baseAuthor = { name: 'Alice', role: 'CTO' }
const mockImage = { src: '/alice.jpg', width: 100, height: 100 }

describe('Blockquote (without image)', () => {
  it('renders string children inside a blockquote', () => {
    render(<Blockquote author={baseAuthor}>Quote text</Blockquote>)
    const blockquote = screen.getByText('Quote text').closest('blockquote')
    expect(blockquote).toBeInTheDocument()
  })

  it('wraps string children in a <p> tag', () => {
    render(<Blockquote author={baseAuthor}>String quote</Blockquote>)
    const p = screen.getByText('String quote').closest('p')
    expect(p).toBeInTheDocument()
  })

  it('renders ReactNode children directly', () => {
    render(
      <Blockquote author={baseAuthor}>
        <em>Emphasized</em>
      </Blockquote>
    )
    expect(screen.getByText('Emphasized').tagName).toBe('EM')
  })

  it('renders author name in figcaption', () => {
    render(<Blockquote author={baseAuthor}>Quote</Blockquote>)
    expect(screen.getByText(/Alice/)).toBeInTheDocument()
  })

  it('renders author role when provided', () => {
    render(<Blockquote author={baseAuthor}>Quote</Blockquote>)
    expect(screen.getByText(/CTO/)).toBeInTheDocument()
  })

  it('does not render role text when role is absent', () => {
    render(<Blockquote author={{ name: 'Bob' }}>Quote</Blockquote>)
    expect(screen.queryByText(/CTO/)).not.toBeInTheDocument()
  })
})

describe('Blockquote (with image)', () => {
  it('renders when image prop is provided', () => {
    render(<Blockquote author={baseAuthor} image={mockImage}>Quote</Blockquote>)
    expect(screen.getByText('Quote')).toBeInTheDocument()
  })

  it('renders an img element', () => {
    const { container } = render(<Blockquote author={baseAuthor} image={mockImage}>Quote</Blockquote>)
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders author name in figcaption', () => {
    render(<Blockquote author={baseAuthor} image={mockImage}>Quote</Blockquote>)
    expect(screen.getByText('Alice')).toBeInTheDocument()
  })

  it('renders author role', () => {
    render(<Blockquote author={baseAuthor} image={mockImage}>Quote</Blockquote>)
    expect(screen.getByText('CTO')).toBeInTheDocument()
  })
})
