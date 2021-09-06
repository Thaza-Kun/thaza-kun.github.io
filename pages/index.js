import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { BlogCards } from './blog'
import { getSortedFilesData } from '@/lib/mdx'
import Layout from '@/components/Layout'

export default function Home({blogs}) {
  return (
    <Layout>
      <main>
        <div className="banner">
          <h1>QAMAR SURIA</h1>
          <p>Blog peribadi milik Murthadza bin Aznam</p>
          <div className="social">
            Media sosial di sini
          </div>
        </div>
      <BlogCards blogs={blogs}/>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const all_blog_data = await getSortedFilesData("blog");

  return {
    props: {blogs : all_blog_data}
  }
}