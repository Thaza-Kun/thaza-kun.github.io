import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
      <>
        <Head>
        </Head>
        <body>
        <NavBar/>
        <div className="wrapper">
          {children}
        </div>
        </body>
      </>
    )
  }

export function NavBar(){
  return (
    <nav className="nav_bar">
      <div className="nav_inner">
      <Link href="/"><a>Home</a></Link>
      <Link href="/blog/"><a>Blog</a></Link>
      <Link href="/mekanik-kuantum"><a>Buku</a></Link>
      </div>
    </nav>
  )
}