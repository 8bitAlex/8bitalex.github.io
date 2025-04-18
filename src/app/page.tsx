import { type Metadata } from 'next'

import { QuoteBanner } from '@/blocks/QuoteBanner'
import { AboutMe } from '@/blocks/sections/AboutMe'
import FeaturedPosts from '@/blocks/sections/FeaturedPosts'
import HeroBanner from '@/blocks/sections/HeroBanner'
import Projects from '@/blocks/sections/Projects'
import { loadCaseStudies } from '@/lib/mdx'
import logoPhobiaDark from '@public/img/clients/phobia/logo-dark.svg'

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <HeroBanner />

      <AboutMe />

      <FeaturedPosts posts={caseStudies} />

      <QuoteBanner
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user&apos;s microphone without triggering
        one of those annoying permission dialogs.
      </QuoteBanner>

      <Projects />
    </>
  )
}
