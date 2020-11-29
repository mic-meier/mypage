// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  withMDX: withMDX({
    extension: /\.mdx?$/,
  }),
}
