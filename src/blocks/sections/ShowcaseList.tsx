import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  name?: string | React.ReactNode
  items: any[][]
  className?: string
  align?: 'start' | 'center' | 'end'
  height?: number
  lgCol?: number
}

export default function ShowcaseList(props: Props) {
  return (
    <Container className={clsx('mt-8', props.className)}>
      <FadeIn className="flex items-center gap-x-8">
        <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
          {props.name}
        </h2>
        <div className="h-px flex-auto bg-neutral-800" />
      </FadeIn>
      <FadeInStagger faster>
        <ul
          role="list"
          className={
            'mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10' +
            (props.lgCol
              ? ` lg:grid-cols-${props.lgCol.toString()}`
              : ' lg:grid-cols-4') +
            (props.align ? ` justify-items-${props.align}` : '')
          }
        >
          {props.items.map(([name, icon]) => (
            <li key={name}>
              <FadeIn>
                <Image
                  height={props.height ? props.height : '36'}
                  src={icon}
                  alt={name}
                  loading="lazy"
                  unoptimized
                  className="drop-shadow-white"
                />
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}
