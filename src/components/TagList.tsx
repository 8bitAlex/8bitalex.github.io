import clsx from 'clsx'
import { FadeIn, FadeInStagger } from './FadeIn'

export function TagList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
        {children}
      </ul>
    </FadeInStagger>
  )
}

export function TagListItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <FadeIn>
      <li className={clsx('rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600', className)}>
        {children}
      </li>
    </FadeIn>
  )
}
