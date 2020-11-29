/** @jsxRuntime classic */
/** @jsx jsx */
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { jsx } from 'theme-ui'

import BlogHeader from '../../components/BlogHeader'
import BlogImage from '../../components/BlogImage'
import Layout from '../../components/Layout'
import { getPostData } from '../../lib/getPostsData'
import { getAllPostSlugs } from '../../lib/getPostsData'

const components = { BlogHeader, BlogImage }

export default function BlogPost({ source, frontMatter }) {
  const content = hydrate(source, { components })

  return (
    <Layout title={frontMatter.title}>
      <div sx={{ mt: [2, 8] }}>
        <div>{content}</div>
      </div>
    </Layout>
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
