import { type Metadata } from 'next'

import { ArticleList } from '@/components/blocks/ArticleList'
import { Container } from '@/components/layout/Container'
import { PageIntro } from '@/components/PageIntro'
import { loadPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Blog posts on software, systems, and side projects—everything I'm building, learning, or thinking about."
}

export default async function Blog() {
  const articles = await loadPosts()
  // Collect unique tags across all posts for the topic-chips row.
  const allTags = Array.from(new Set(articles.flatMap((a) => a.tags ?? []))).sort((a, b) =>
    a.localeCompare(b)
  )

  return (
    <>
      <PageIntro eyebrow="Blog" title="Articles, Announcements, and More">
        <p>{metadata.description}</p>
        {allTags.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-neutral-600">Topics:</span>
            {allTags.map((tag) => (
              <a
                key={tag}
                href={`/blog/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
              >
                {tag}
              </a>
            ))}
          </div>
        )}
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ArticleList articles={articles} />
      </Container>
    </>
  )
}
