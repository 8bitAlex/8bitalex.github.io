import { SocialMedia } from '@/components/SocialMedia'
import clsx from 'clsx'

type Props = {
  invert?: boolean
}

export default function SocialMediaBlock(props: Props) {
  return (
    <div className="sm:border-l sm:border-transparent">
      <h2 className={clsx('font-display text-base font-semibold', props.invert ? 'text-white' : 'text-black')}>
        Follow me
      </h2>
      <SocialMedia className="mt-6" invert={props.invert} />
    </div>
  )
}
