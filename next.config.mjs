import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import createMDX from '@next/mdx'
import rehypeShiki from '@shikijs/rehype'
import { Parser } from 'acorn'
import jsx from 'acorn-jsx'
import escapeStringRegexp from 'escape-string-regexp'
import * as path from 'path'
import { recmaImportImages } from 'recma-import-images'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import { unifiedConditional } from 'unified-conditional'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
}

function remarkMDXLayout(source, metaName) {
  let parser = Parser.extend(jsx())
  let parseOptions = { ecmaVersion: 'latest', sourceType: 'module' }

  return (tree) => {
    let imp = `import _Layout from '${source}'`
    let exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) }
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) }
      }
    )
  }
}

const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    recmaPlugins: [recmaImportImages],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          theme: 'nord'
        }
      ],
      [
        remarkRehypeWrap,
        {
          node: { type: 'mdxJsxFlowElement', name: 'Typography' },
          start: ':root > :not(mdxJsxFlowElement)',
          end: ':root > mdxJsxFlowElement'
        }
      ],
      rehypeUnwrapImages
    ],
    remarkPlugins: [
      remarkGfm,
      [
        unifiedConditional,
        [
          new RegExp(`^${escapeStringRegexp(path.resolve('src/app/blog'))}/*`),
          [[remarkMDXLayout, '@/app/blog/wrapper', 'post']]
        ],
        [
          new RegExp(`^${escapeStringRegexp(path.resolve('src/app/projects'))}/*`),
          [[remarkMDXLayout, '@/app/projects/wrapper', 'project']]
        ]
      ]
    ]
  }
})

async function buildConfig() {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform()
  }

  return withMDX(nextConfig)
}

export default buildConfig()
