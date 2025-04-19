import { SectionHeader } from '@/blocks/sections/SectionHeader'
import { Container } from './Container'

export default function Section({
  children,
  className,
  title,
  invert,
}: {
  children: React.ReactNode
  className?: string
  title?: string
  invert?: boolean
}) {
  return (
    <section className={className}>
      <SectionHeader title={title ? title : ''} invert={invert} />
      <Container>
        <div>{children}</div>
      </Container>
    </section>
  )
}
