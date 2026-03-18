import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Button } from '@/components/Button'
import { sendGAEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'

describe('Button', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValue('/')
    vi.mocked(sendGAEvent).mockClear()
  })

  it('renders as button when no href provided', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders as anchor when href provided', () => {
    render(<Button href="/blog">Go</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog')
  })

  it('renders children text inside a span', () => {
    render(<Button>Label</Button>)
    const span = screen.getByText('Label').closest('span')
    expect(span).toBeInTheDocument()
  })

  it('applies dark styles by default', () => {
    render(<Button>x</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-neutral-950', 'text-white')
  })

  it('applies inverted styles when invert=true', () => {
    render(<Button invert>x</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-white', 'text-neutral-950')
  })

  it('applies custom className', () => {
    render(<Button className="extra">x</Button>)
    expect(screen.getByRole('button')).toHaveClass('extra')
  })

  it('fires sendGAEvent on link click', async () => {
    const user = userEvent.setup()
    render(<Button href="/projects">Projects</Button>)
    await user.click(screen.getByRole('link'))
    expect(sendGAEvent).toHaveBeenCalledWith('event', 'button_click', expect.objectContaining({
      href: '/projects',
    }))
  })

  it('sends current pathname as source in GA event', async () => {
    vi.mocked(usePathname).mockReturnValue('/blog')
    const user = userEvent.setup()
    render(<Button href="/x">Go</Button>)
    await user.click(screen.getByRole('link'))
    expect(sendGAEvent).toHaveBeenCalledWith('event', 'button_click', expect.objectContaining({
      source: '/blog',
    }))
  })

  it('does not fire GA event for plain button', async () => {
    const user = userEvent.setup()
    render(<Button>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(sendGAEvent).not.toHaveBeenCalled()
  })
})
