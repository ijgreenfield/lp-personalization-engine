import Head from 'next/head'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
        <Head>
            <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>

        {/* Render children within layout */}
        <div>
            { children }
        </div>
    </div>
  )
}
