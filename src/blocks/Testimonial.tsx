import ProfileCard from '@/components/ProfileCard'
import clsx from 'clsx'
import { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  bigText?: string | React.ReactNode
  text?: string | React.ReactNode
  subtext?: string | React.ReactNode
  image: {
    src: StaticImageData
  }
  className?: string
}

export default function Testimonial(props: Props) {
  return (
    <div
      className={clsx(
        'relative mx-auto px-6 md:max-w-2xl md:px-0 lg:max-w-7xl lg:px-8',
        props.className,
      )}
    >
      <figure className="grid grid-cols-1 items-center gap-x-0 gap-y-4 sm:gap-x-6 lg:gap-x-10">
        <div className="relative col-span-2 sm:col-start-1 sm:row-start-2">
          <blockquote className="text-xl/8 sm:text-2xl/9">
            <p>{props.bigText}</p>
          </blockquote>
        </div>
        <div className="xs:w-full col-end-1 sm:row-span-4 sm:w-64 lg:w-72">
          <ProfileCard
            image={props.image}
            name={props.text}
            subtext={props.subtext}
            textClassName="sm:invisible"
          />
        </div>
        <figcaption className="invisible row-start-3 h-0 text-base sm:visible sm:col-start-1 sm:h-auto lg:row-start-4">
          <div className="font-semibold">{props.text}</div>
          <div className="mt-1">{props.subtext}</div>
        </figcaption>
      </figure>
    </div>
  )
}
