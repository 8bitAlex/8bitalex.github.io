import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

type Props = {
  name?: string | React.ReactNode
  subtext?: string | React.ReactNode
  image: {
    src: StaticImageData
  }
  className?: string
  textClassName?: string
}

export default function ProfileCard(props: Props) {
  return (
    <div className={clsx('group relative overflow-hidden rounded-3xl bg-neutral-100', props.className)}>
      <Image
        alt=""
        {...props.image}
        className="w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
      />
      <div
        className={clsx(
          'absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6',
          props.textClassName,
        )}
      >
        <div className="font-display text-base/6 font-semibold tracking-wide text-white">{props.name}</div>
        <div className="mt-2 text-sm text-white">{props.subtext}</div>
      </div>
    </div>
  )
}
