import { ContactSection } from '@/components/ContactSection'
import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/layout/Container'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Post, type MDXEntry, loadPosts } from '@/lib/mdx'

export default async function BlogArticleWrapper({
  post: post,
  children
}: {
  post: MDXEntry<Post>
  children: React.ReactNode
}) {
  const allPosts = await loadPosts()
  const morePosts = allPosts.filter(({ metadata }) => metadata !== post.metadata).slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl">
              {post.title}
            </h1>
            <time dateTime={post.date} className="order-first text-sm text-neutral-950">
              {formatDate(post.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">by {post.author.name}</p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">{children}</MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {morePosts.length > 0 && (
        <PageLinks className="mt-24 sm:mt-32 lg:mt-40" title="More articles" pages={morePosts} />
      )}

      <ContactSection />
    </>
  )
}
