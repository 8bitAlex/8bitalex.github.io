import { SectionHeader } from '@/components/blocks/TextHeaders'
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
    <section className={className}>
      <SectionHeader title={title ? title : ''} description={description} invert={invert} eyebrow={eyebrow} />
      <Container className="mb-8">
        <div>{children}</div>
      </Container>
    </section>
  )
}
