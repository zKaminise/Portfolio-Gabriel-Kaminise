import type { Metadata } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/components/ui/LanguageContext'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gabriel Kaminise | Backend Java Developer & SRE/DevOps',
  description:
    'Backend Java Developer from Brazil focused on Java, Spring Boot, REST APIs, microservices, AWS, SRE/DevOps, observability and international opportunities.',
  keywords: [
    'Gabriel Kaminise',
    'Gabriel Misao',
    'Backend Developer',
    'Java Developer',
    'Spring Boot Developer',
    'SRE',
    'DevOps',
    'AWS',
    'Microservices',
    'REST APIs',
    'Software Engineer Brazil',
    'International Developer Portfolio',
    'Observability',
    'Cloud Engineer',
    'Remote Developer Brazil',
  ],
  authors: [{ name: 'Gabriel Misao Pinheiro Kaminise' }],
  creator: 'Gabriel Kaminise',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.gabrielmisao.com.br',
    title: 'Gabriel Kaminise | Backend Java Developer & SRE/DevOps',
    description:
      'Backend Java Developer from Brazil focused on Java, Spring Boot, REST APIs, microservices, AWS, SRE/DevOps, and observability. Open to international opportunities.',
    siteName: 'Gabriel Kaminise Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gabriel Kaminise | Backend Java Developer & SRE/DevOps',
    description:
      'Backend Java Developer from Brazil. Java, Spring Boot, AWS, SRE/DevOps, Microservices. Open to international opportunities.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://portfolio.gabrielmisao.com.br'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
