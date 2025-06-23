import { SectionHeader } from '@/components/blocks/TextHeaders'
import clsx from 'clsx'
import { Container } from './Container'

export default function Section({
  children,
  className,
  title,
  description,
  eyebrow,
  invert
}: {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string | React.ReactNode
  eyebrow?: string
  invert?: boolean
}) {
  return (
    <section className={clsx('mt-12 mb-12 sm:mt-16 lg:mt-18', className)}>
      <SectionHeader title={title ? title : ''} description={description} invert={invert} eyebrow={eyebrow} />
      <Container>
        <div>{children}</div>
      </Container>
    </section>
  )
}
