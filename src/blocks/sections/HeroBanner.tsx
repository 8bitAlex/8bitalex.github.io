import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'

export default function HeroBanner() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
          Alex Salerno
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          <span className="text-red-700">Software Engineer.</span> Designer.
          Innovator.
        </p>
      </FadeIn>
    </Container>
  )
}
