import { Inter } from 'next/font/google'

import ThemeProvider from '@/src/providers/ThemeProvider'
import Header from '@/src/components/common/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
