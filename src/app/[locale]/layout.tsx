// app/[locale]/layout.tsx
import ThemeProvider from '@/src/providers/ThemeProvider'
import Header from '@/src/components/common/Header'
import { Metadata } from 'next'

type LayoutProps = {
  children: React.ReactNode
  params: {
    locale: string
  }
}

// Metadata tanımı (isteğe bağlı)
export const metadata: Metadata = {
  title: 'Your Portfolio',
  description: 'Your Portfolio Description'
}

// Desteklenen diller için statik parametreleri oluştur
export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }]
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
