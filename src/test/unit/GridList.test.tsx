import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GridList, GridListItem } from '@/components/GridList'

describe('GridList', () => {
  it('renders a list with role="list"', () => {
    render(
      <GridList>
        <GridListItem title="Item">Text</GridListItem>
      </GridList>
    )
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('applies responsive grid classes', () => {
    render(
      <GridList>
        <GridListItem title="Item">Text</GridListItem>
      </GridList>
    )
    expect(screen.getByRole('list')).toHaveClass('grid', 'grid-cols-1')
  })

  it('applies custom className to list', () => {
    render(
      <GridList className="custom">
        <GridListItem title="Item">Text</GridListItem>
      </GridList>
    )
    expect(screen.getByRole('list')).toHaveClass('custom')
  })
})

describe('GridListItem', () => {
  it('renders the title with a period appended', () => {
    render(
      <ul>
        <GridListItem title="My Title">desc</GridListItem>
      </ul>
    )
    expect(screen.getByText('My Title.')).toBeInTheDocument()
  })

  it('renders children text', () => {
    render(
      <ul>
        <GridListItem title="t">Description text</GridListItem>
      </ul>
    )
    expect(screen.getByText('Description text')).toBeInTheDocument()
  })

  it('applies inverted text class when invert=true', () => {
    render(
      <ul>
        <GridListItem title="t" invert>text</GridListItem>
      </ul>
    )
    expect(screen.getByRole('listitem')).toHaveClass('text-neutral-300')
  })

  it('applies dark text class by default', () => {
    render(
      <ul>
        <GridListItem title="t">text</GridListItem>
      </ul>
    )
    expect(screen.getByRole('listitem')).toHaveClass('text-neutral-600')
  })

  it('applies custom className', () => {
    render(
      <ul>
        <GridListItem title="t" className="my-cls">text</GridListItem>
      </ul>
    )
    expect(screen.getByRole('listitem')).toHaveClass('my-cls')
  })
})
