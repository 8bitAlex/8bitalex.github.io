import { SectionHeader } from '@/blocks/sections/SectionHeader'
import { Container } from './Container'

export default function Section({
  children,
  className,
  title,
  description,
  invert,
}: {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  invert?: boolean
}) {
  return (
    <section className={className}>
      <SectionHeader title={title ? title : ''} description={description} invert={invert} />
      <Container>
        <div>{children}</div>
      </Container>
    </section>
  )
}
