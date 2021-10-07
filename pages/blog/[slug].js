import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import CustomLink from '@/components/CustomLink';
import Layout from '@/components/Layout';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import { DefaultDate } from '@/lib/calendar';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    //TODO Bahagian ini tak dikemas lagi daripada template
    a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    TestComponent: dynamic(() => import('@/components/TestComponent')),
    Head,
}

export default function BlogPage({ source, frontmatter }) {
    const theDate = DefaultDate(frontmatter.date)
    return (
      <Layout>
        <Head>{frontmatter.title}</Head>
        <main className="blog-container">
        <div className="blog-header">
          <h1>{frontmatter.title}</h1>
          <div className="blog-date">{theDate}</div>
          {frontmatter.description && (
            <p className="blog-description">{frontmatter.description}</p>
          )}
          {frontmatter.cover 
          ?<div className="blog-cover">
            <Image src={ frontmatter.cover } height={320} width={640} alt={ frontmatter.cover_alt ? frontmatter.cover_alt : frontmatter.cover }/>
          </div> 
          : null }
        </div>
          <MDXRemote {...source} components={components} />
        </main>
      </Layout>
    )
  }

export async function getStaticProps ({ params }) {
  const { post, frontmatter } = getFileBySlug('blog', params.slug);
  const mdxSource = await serialize(post, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontmatter,
  })
  
  return {
    props: {
      source: mdxSource,
      frontmatter,
      slug: params.slug
    },
  }
}

export async function getStaticPaths () {
  const posts = await getFiles('blog');
  
  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}