import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '@components/Navigation'
import Footer from '@components/Footer'

export default function MetaContainer({
  children,
  customMeta,
}: {
  children: any
  customMeta: any
}) {
  const router = useRouter()

  const meta = {
    title: 'Daniel Niemann Hjermitslev - Tech Geek, Developer, Writer',
    description: `I've been working in IT for ~12 years straight. Get in touch with me to know more.`,
    image: '/public/avatar.png',
    type: 'website',
    date: new Date().toDateString(),
    ...customMeta,
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.danielhjermitslev.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.danielhjermitslev.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Daniel Niemann Hjermitslev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/*  <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
