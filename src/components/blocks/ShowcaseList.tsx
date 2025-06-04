import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import clsx from 'clsx'
import Image from 'next/image'
import { HeaderWithDivider } from './TextHeaders'

type Props = {
  name?: string | React.ReactNode
  items: any[][]
  className?: string
  center?: boolean
  height?: number
  wide?: boolean
}

export default function ShowcaseList(props: Props) {
  return (
    <Container className={clsx('mt-8', props.className)}>
      <FadeIn>
        <HeaderWithDivider name={props.name} invert />
      </FadeIn>
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
