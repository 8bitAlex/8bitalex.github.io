'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { sendGAEvent } from '@next/third-parties/google'
import { usePathname } from 'next/navigation'

type ButtonProps = {
  invert?: boolean
} & (React.ComponentPropsWithoutRef<typeof Link> | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined }))

export function Button({ invert = false, className, children, ...props }: ButtonProps) {
  const pathname = usePathname()

  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition hover:scale-105',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200 border-solid border-neutral-950 border-2'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  )

  const inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props} onClick={() => handleClick(props, pathname)}>
      {inner}
    </Link>
  )
}

function handleClick(props: ButtonProps, pathname: string) {
  const label = React.Children.toArray(props.children).join('');
  sendGAEvent('event', 'button_click', { source: pathname, href: props.href, label });
}
