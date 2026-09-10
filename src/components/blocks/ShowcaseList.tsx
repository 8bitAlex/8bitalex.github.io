import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import clsx from 'clsx'
import Image from 'next/image'
import { HeaderWithDivider } from './TextHeaders'

const DEFAULT_HEIGHT = 36
const FEATURED_SCALE = 1.25

type Props = {
  name?: string | React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[][]
  // A single [name, icon] entry rendered larger, on its own row above the grid.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  featured?: any[]
  className?: string
  center?: boolean
  height?: number
  featuredHeight?: number
  wide?: boolean
}

export default function ShowcaseList(props: Props) {
  const height = props.height ?? DEFAULT_HEIGHT
  const featuredHeight = props.featuredHeight ?? Math.round(height * FEATURED_SCALE)

  return (
    <Container className={clsx('mt-8', props.className)}>
      <FadeIn>
        <HeaderWithDivider name={props.name} invert />
      </FadeIn>
      {props.featured && (
        <FadeIn className="mt-10 flex justify-center">
          <Image
            height={featuredHeight}
            src={props.featured[1]}
            alt={props.featured[0]}
            loading="lazy"
            unoptimized
            className="drop-shadow-white"
          />
        </FadeIn>
      )}
      <FadeInStagger faster>
        <ul
          role="list"
          className={clsx(
            'mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10',
            props.center && 'justify-items-center',
            props.wide ? `lg:grid-cols-5` : 'lg:grid-cols-4'
          )}
        >
          {props.items.map(([name, icon]) => (
            <li key={name}>
              <FadeIn>
                <Image height={height} src={icon} alt={name} loading="lazy" unoptimized className="drop-shadow-white" />
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}
