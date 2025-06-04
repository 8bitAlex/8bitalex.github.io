import { type Metadata } from 'next'

import { AboutMe } from '@/components/sections/AboutMe'
import FeaturedPosts from '@/components/sections/FeaturedPosts'
import HeroBanner from '@/components/sections/HeroBanner'
import Projects from '@/components/sections/Projects'
import { loadPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: {
    absolute: 'Alex Salerno | Software Engineer'
  },
  description:
    'Award-winning Software Engineer with 10+ years of experience in distributed systems, API frameworks, full-stack application development, and developer tooling.'
}

export default async function Home() {
  const posts = await loadPosts()

  return (
    <>
      <HeroBanner />

      <AboutMe />

      <FeaturedPosts posts={posts} />

      <Projects />
    </>
  )
}
