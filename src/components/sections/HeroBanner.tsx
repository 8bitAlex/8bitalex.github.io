import { FadeIn } from '@/components/FadeIn'
import { SlotWord } from '@/components/SlotWord'
import { Container } from '@/components/layout/Container'

export default function HeroBanner() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
          Alex Salerno
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          <SlotWord
            words={[
              'Problem Solver.',
              'Architect.',
              'Debugger.',
              'Builder.',
              'Nerd.',
              'Tinkerer.',
              'Craftsman.',
              'Hacker.',
              'Developer.',
              'Maker.',
              'Driven.',
              'Curious.',
              'Creative.',
              'Passionate.',
              'Dedicated.',
              'Gamer.',
              'AI Wrangler.',
              'Code Monkey.',
              'Veteran.'
            ]}
            final="Software Engineer."
          />{' '}
          Designer. Innovator.
        </p>
      </FadeIn>
    </Container>
  )
}
