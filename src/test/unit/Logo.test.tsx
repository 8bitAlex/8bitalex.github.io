import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Logo, Logomark, LogoText } from '@/components/Logo'

describe('Logomark', () => {
  it('renders an svg', () => {
    const { container } = render(<Logomark />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies fill-neutral-950 to rect by default', () => {
    const { container } = render(<Logomark />)
    const rect = container.querySelector('rect')
    expect(rect?.className.baseVal ?? rect?.getAttribute('class')).toContain('fill-neutral-950')
  })

  it('applies fill-white to rect when invert=true', () => {
    const { container } = render(<Logomark invert />)
    const rect = container.querySelector('rect')
    expect(rect?.className.baseVal ?? rect?.getAttribute('class')).toContain('fill-white')
  })

  it('applies w-8 class when filled=true', () => {
    const { container } = render(<Logomark filled />)
    const rect = container.querySelector('rect')
    expect(rect?.className.baseVal ?? rect?.getAttribute('class')).toContain('w-8')
  })

  it('applies w-0 class when not filled', () => {
    const { container } = render(<Logomark />)
    const rect = container.querySelector('rect')
    expect(rect?.className.baseVal ?? rect?.getAttribute('class')).toContain('w-0')
  })
})

describe('LogoText', () => {
  it('renders an svg', () => {
    const { container } = render(<LogoText />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies className to path elements', () => {
    const { container } = render(<LogoText className="fill-white" />)
    const paths = container.querySelectorAll('path')
    expect(paths.length).toBeGreaterThan(0)
    paths.forEach((p) => {
      expect(p.getAttribute('class')).toContain('fill-white')
    })
  })
})

describe('Logo', () => {
  it('renders an svg', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('is aria-hidden (decorative)', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('adds group/logo class when fillOnHover=true', () => {
    const { container } = render(<Logo fillOnHover />)
    expect(container.querySelector('svg')).toHaveClass('group/logo')
  })

  it('does not add group/logo class by default', () => {
    const { container } = render(<Logo />)
    expect(container.querySelector('svg')).not.toHaveClass('group/logo')
  })

  it('forwards custom className', () => {
    const { container } = render(<Logo className="h-8" />)
    expect(container.querySelector('svg')).toHaveClass('h-8')
  })
})
