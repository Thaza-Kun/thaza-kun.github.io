import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { getSortedFilesData } from '@/lib/mdx'
import Layout from '@/components/Layout'
import { DefaultDateShort } from '@/lib/calendar'

export default function Home({ blogs }) {
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
  
export function theDate(date){
  return date?DefaultDateShort(date):null
}
export function BlogCards({ blogs }){
  return (
    <div className="container_cards">
    <h2>BLOG</h2>
    { blogs.map(({ data }) => ( data.draft != true &&
    <Link key={data.slug} href={"/blog/" + data.slug}>
      <a>
      <div className="card">
      {data.cover && <Image src={ data.cover } height={320} width={640} alt={data.slug}/>}
      <h2> { data.title } </h2>
      <p> { theDate(data.date) }</p>
      <p>{ data.description }</p>
      </div>
      </a>
    </Link>
    ) ) }
    </div>
  )
}

