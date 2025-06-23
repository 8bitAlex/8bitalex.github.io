import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'

import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { Container } from '@/components/layout/Container'
import { Border } from '../Border'

export function QuoteBanner({
  children,
  author: author,
  className
}: {
  children: React.ReactNode
  author?: { logo?: ImageProps['src']; name: string }
  className?: string
}) {
  return (
    <div className={clsx('relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32', className)}>
      <div className="mx-auto max-w-2xl px-6 md:px-0 lg:max-w-7xl lg:px-8">
        <Border position="left">
          <GridPattern
            className="absolute inset-0 -z-10 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
            yOffset={-256}
          />
          <Container>
            <FadeIn>
              <figure className="mx-auto max-w-4xl">
                <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                  <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                    {children}
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  {author?.logo && <Image src={author.logo} alt={author.name} unoptimized />}
                </figcaption>
                {author && !author?.logo && <p className="mt-6 font-semibold text-neutral-950">{author.name}</p>}
              </figure>
            </FadeIn>
          </Container>
        </Border>
      </div>
    </div>
  )
}
