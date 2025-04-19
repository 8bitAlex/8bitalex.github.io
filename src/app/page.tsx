import { type Metadata } from 'next'

import { AboutMe } from '@/blocks/sections/AboutMe'
import FeaturedPosts from '@/blocks/sections/FeaturedPosts'
import HeroBanner from '@/blocks/sections/HeroBanner'
import Projects from '@/blocks/sections/Projects'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  description: 'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  const posts = (await loadArticles()).slice(0, 3)

  return (
    <>
      <HeroBanner />

      <AboutMe />

      {posts.length > 0 ? <FeaturedPosts posts={posts} /> : null}

      {/* <QuoteBanner
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user&apos;s microphone without triggering
        one of those annoying permission dialogs.
      </QuoteBanner> */}

      <Projects />
    </>
  )
}
