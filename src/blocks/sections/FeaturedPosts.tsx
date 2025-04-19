import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Section from '@/components/layout/Section'
import { MDXEntry, Post } from '@/lib/mdx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function FeaturedPosts({ posts }: { posts: Array<MDXEntry<Post>> }) {
  const cols = Math.min(posts.length, 3)

  return (
    <Section
      title="Featured Posts"
      description='"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry'
    >
      <FadeInStagger className={`grid grid-cols-1 gap-8 lg:grid-cols-${cols} mt-8`}>
        {posts.map((post) => (
          <FadeIn key={post.href} className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <Link href={post.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  <FontAwesomeIcon className="h-16 w-16" icon={post.icon} />
                </Link>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <time dateTime={post.date.split('-')[0]} className="font-semibold">
                  {post.date.split('-')[0]}
                </time>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>{post.tag}</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">{post.title}</p>
              <p className="mt-4 text-base text-neutral-600">{post.description}</p>
            </article>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Section>
  )
}
