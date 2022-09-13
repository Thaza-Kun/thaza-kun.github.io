/* eslint-disable react/display-name */
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

import YouTube from '@/components/embeds/Youtube'
import Figure from '@/components/embeds/Figure'

import MetaPost from '@/components/admonitions/MetaPost'
import Law from '@/components/admonitions/Law'
import Example from '@/components/admonitions/Example'
import BlockQuote from '@/components/blockquotes'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  blockquote: BlockQuote,
  BlogNewsletterForm: BlogNewsletterForm,
  YouTube: YouTube,
  Figure: Figure,
  MetaPost: MetaPost,
  Law: Law,
  Example: Example,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
