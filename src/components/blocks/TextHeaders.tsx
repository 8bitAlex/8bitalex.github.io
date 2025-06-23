import { SectionIntro } from '@/components/SectionIntro'
import clsx from 'clsx'

type SectionHeaderProps = {
  title: string
  eyebrow?: string
  description?: string | React.ReactNode
  className?: string
  invert?: boolean
}

export function SectionHeader(props: SectionHeaderProps) {
  return (
    <SectionIntro eyebrow={props.eyebrow} title={props.title} className={props.className} invert={props.invert}>
      <div>{props.description}</div>
    </SectionIntro>
  )
}

type HeaderWithDividerProps = {
  name: string | React.ReactNode
  className?: string
  invert?: boolean
}

export function HeaderWithDivider({ name, className, invert }: HeaderWithDividerProps) {
  return (
    <div className={clsx('flex items-center gap-x-8', className)}>
      <h2
        className={`text-center font-display text-sm font-semibold tracking-wider sm:text-left ${invert ? 'text-white' : 'text-black'}`}
      >
        {name}
      </h2>
      <div className="h-px flex-auto bg-neutral-800" />
    </div>
  )
}
