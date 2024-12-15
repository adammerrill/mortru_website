import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import LogoNav from './components/LogoNav'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MorTru - Discover the True Value of Real Estate',
  description: 'MorTru provides accurate, transparent, and comprehensive real estate data to help you make informed decisions.',
  keywords: ['real estate', 'property valuation', 'market insights', 'home buying', 'real estate data'],
  authors: [{ name: 'MorTru Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mortru.com',
    site_name: 'MorTru',
    images: [
      {
        url: 'https://www.mortru.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MorTru - Real Estate Insights',
      },
    ],
  },
  twitter: {
    handle: '@mortru',
    site: '@mortru',
    cardType: 'summary_large_image',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MorTru",
  "url": "https://www.mortru.com",
  "logo": "https://www.mortru.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/mortru",
    "https://www.twitter.com/mortru",
    "https://www.linkedin.com/company/mortru"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground p-2 z-50">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground px-4 py-2 z-50">
              Skip to main content
            </a>
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
              <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <LogoNav />
                <ThemeSwitcher />
              </nav>
            </header>
            <main id="main-content" className="flex-grow" aria-label="Main content">
              <article>
                {children}
              </article>
            </main>
            <footer className="bg-muted" aria-label="Footer">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} MorTru. All rights reserved.</p>
                <Link href="/dashboard" className="text-2xs text-muted-foreground hover:underline">
                  Login
                </Link>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

