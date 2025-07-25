import clsx from 'clsx'

import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
}) {
  return (
    <Container className={clsx('mt-18 sm:mt-26 lg:mt-32', centered && 'text-center')}>
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-red-700">{eyebrow}</span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl',
              centered && 'mx-auto'
            )}
          >
            {title}
          </span>
        </h1>
        <div className={clsx('mt-6 max-w-3xl text-xl text-neutral-600', centered && 'mx-auto')}>{children}</div>
      </FadeIn>
    </Container>
  )
}
