import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import AlexPhoto from '@public/img/alex-portrait.jpg'
import glob from 'fast-glob'
import { type ImageProps } from 'next/image'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
        const metadata = (await import(`../app/${directory}/${filename}`))[metaName] as T
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
        }
      }),
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Post {
  date: string
  title: string
  description: string
  tag: string
  icon: IconProp | FontAwesomeIconProps['icon']
  image: ImagePropsWithOptionalAlt
}

export interface Article extends Post {
  author: {
    name: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy extends Post {
  client: string
  summary: Array<string>
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export const BlogPost = {
  tag: 'Article',
  author: {
    name: 'Alex Salerno',
    image: {
      src: AlexPhoto,
      alt: 'Alex Salerno Portrait',
    },
  },
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}
