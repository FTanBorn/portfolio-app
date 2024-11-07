import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from './navigation'

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    onError(error) {
      if (error.code === 'MISSING_MESSAGE') {
        // console.error(error)
      } else {
        // reportToErrorTracking(error);
      }
    },
    getMessageFallback({ key, error }) {
      // 'path' değişkenini kaldırdık çünkü kullanılmıyor
      if (error.code === 'MISSING_MESSAGE') {
        return key
      } else {
        return key
      }
    }
  }
})
