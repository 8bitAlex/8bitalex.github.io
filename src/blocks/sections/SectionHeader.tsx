import { SectionIntro } from '@/components/SectionIntro'
import clsx from 'clsx'

type Props = {
  title: string
  eyebrow?: string
  description?: string
  className?: string
  invert?: boolean
}

export function SectionHeader(props: Props) {
  return (
    <SectionIntro
      eyebrow={props.eyebrow}
      title={props.title}
      className={clsx('mt-24 sm:mt-32 lg:mt-40', props.className)}
      invert={props.invert}
    >
      <p>{props.description}</p>
    </SectionIntro>
  )
}
