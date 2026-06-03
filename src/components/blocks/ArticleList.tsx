import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { formatDate } from '@/lib/formatDate'
import { type MDXEntry, type Post } from '@/lib/mdx'

// Shared list of blog articles. Used on the /blog index and on every
// /blog/tags/[tag] filter page. Articles are rendered in descending date
// order so the caller can hand in either the full set or a tag-filtered subset.
export function ArticleList({ articles }: { articles: Array<MDXEntry<Post>> }) {
  if (articles.length === 0) {
    return <p className="text-center text-neutral-600">No posts here yet.</p>
  }
  return (
    <div className="space-y-24 lg:space-y-32">
      {articles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((article) => (
          <FadeIn key={article.href}>
            <article>
              <Border className="pt-16">
                <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                  <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                    <h2 className="font-display text-2xl font-semibold text-neutral-950">
                      <Link href={article.href}>{article.title}</Link>
                    </h2>
                    <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                      <dt className="sr-only">Published</dt>
                      <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </dd>
                      <dt className="sr-only">Author</dt>
                      <dd className="mt-6 flex gap-x-4">
                        <div className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                          <Image alt="" {...article.author.image} className="h-12 w-12 object-cover grayscale" />
                        </div>
                        <div className="text-sm text-neutral-950">
                          <div className="font-semibold">{article.author.name}</div>
                        </div>
                      </dd>
                    </dl>
                    <p className="mt-6 max-w-2xl text-base text-neutral-600">{article.description}</p>
                    {article.tags && article.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/blog/tags/${tag.toLowerCase()}`}
                            className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium text-neutral-700 transition hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )}
                    <Button href={article.href} aria-label={`Read more: ${article.title}`} className="mt-8">
                      Read more
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
    </div>
  )
}
