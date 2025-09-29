import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - G.Beltrami',
    default: 'G.Beltrami',
  },
  description:
    'Personal website of G.Beltrami',
  openGraph: {
    title: 'G.Beltrami',
    description: 'Personal website of G.Beltrami',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'G.Beltrami',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'G.Beltrami',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'G.Beltrami',
    description: 'Personal website of G.Beltrami',
    images: ['/og-image.svg'],
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
