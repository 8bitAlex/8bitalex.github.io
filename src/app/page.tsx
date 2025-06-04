import { type Metadata } from 'next'

import { AboutMe } from '@/components/blocks/sections/AboutMe'
import HeroBanner from '@/components/blocks/sections/HeroBanner'
import Projects from '@/components/blocks/sections/Projects'
import { loadPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: {
    absolute: 'Alex Salerno | Software Engineer'
  },
  description:
    'Award-winning Software Engineer with 10+ years of experience in distributed systems, API frameworks, full-stack application development, and developer tooling.'
}

export default async function Home() {
  const posts = (await loadPosts()).slice(0, 3)

  return (
    <>
      <HeroBanner />

      <AboutMe />

      <Projects />
    </>
  )
}
