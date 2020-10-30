import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'

import { getPostData } from '../../lib/getPostsData'
import { getAllPostSlugs } from '../../lib/getPostsData'

const components = {}

export default function BlogPost({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <div>{content}</div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const source = await getPostData(params.slug)
  const { content, data } = matter(source)
  const mdxSource = await renderToString(content, { components, scope: data })

  return { props: { source: mdxSource, frontMatter: data } }
}
