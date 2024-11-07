// app/[locale]/layout.tsx
import ThemeProvider from '@/src/providers/ThemeProvider'
import Header from '@/src/components/common/Header'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }]
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
