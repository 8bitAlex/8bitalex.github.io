import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import AlexPhoto from '@public/img/alex-portrait.jpg'
import glob from 'fast-glob'
import { StaticImageData, type ImageProps } from 'next/image'

async function loadEntries<T extends MDX>(directory: string, metaName: string): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(async (filename) => {
        const metadata = (await import(`../app/${directory}/${filename}`))[metaName] as T
        return {
          ...metadata,
          metadata,
          href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`
        }
      })
    )
  ).sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T extends MDX> = T & {
  metadata: T
}

interface MDX {
  title: string
  description: string
  date: string
  href: string
  tags?: string[]
}

export interface Post extends MDX {
  icon: IconProp | FontAwesomeIconProps['icon']
  image: ImagePropsWithOptionalAlt
  type: 'Article' | 'Tutorial' | 'Announcement'
  author: {
    name: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface Project extends MDX {
  order: number
  abstract: string
  startDate: string
  type: string
  image: StaticImageData
  status: string
  repo?: string
  website?: string
  support?: string
}

export const BlogPost = {
  type: 'Article' as const,
  author: {
    name: 'Alex Salerno',
    image: {
      src: AlexPhoto,
      alt: 'Alex Salerno Portrait'
    }
  }
}

export function loadPosts() {
  return loadEntries<Post>('blog', 'post')
}

export function loadProjects() {
  return loadEntries<Project>('projects', 'project')
}
