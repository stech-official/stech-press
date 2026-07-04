import { BuiltWithOutstatic } from '@/components/built-with-outstatic'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { absoluteUrl, ogUrl } from '@/lib/utils'
import '@/styles/index.css'
import { Metadata } from 'next'
import 'katex/dist/katex.min.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://press.stechnology.jp'),
  title: {
    default: 'S-TECH Press',
    template: '%s | S-TECH Press'
  },
  description:
    'S-TECH Pressは、S-TECH公式のお知らせを配信しているサイトです。',
  openGraph: {
    title: 'S-TECH Press',
    description:
      'S-TECH Pressは、S-TECH公式のお知らせを配信しているサイトです。',
    url: absoluteUrl('/'),
    siteName: 'S-TECH Press',
    images: [
      {
        url: 'https://stechnology.jp/ogp.png', // ogUrl() を外して直接指定
        width: 1200,
        height: 630
      }
    ],
    locale: 'ja_JP',
    type: 'website'
  },
  icons: {
    icon: [{ url: 'https://stechnology.jp/favicon.ico' }],
    apple: [{ url: 'https://stechnology.jp/favicon.ico' }] // Apple用も統一しておくと親切です
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative pb-56 md:pb-36 min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="relative max-w-6xl mx-auto px-5 h-full pt-8 md:py-24">
            {children}
          </div>
          <BuiltWithOutstatic fixed />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
