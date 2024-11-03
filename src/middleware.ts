/** Next */
import { NextRequest, NextResponse } from 'next/server'

/** Next Intl */
import createIntlMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'tr'
})

async function setPidCookie(request: NextRequest, response: NextResponse) {
  const pid: string = crypto.randomUUID()
  if (!request.cookies.has('m-pid') && response.cookies) {
    response.cookies.set({
      name: 'm-pid',
      value: pid,
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
      secure: false,
      httpOnly: true
    })
  }
  return response
}

export async function middleware(request: NextRequest) {
  var response

  if (
    !request.nextUrl.pathname.startsWith('/api') &&
    !request.nextUrl.pathname.startsWith('/monitoring') &&
    !request.nextUrl.pathname.startsWith('/favicon') &&
    !request.nextUrl.pathname.startsWith('/.well-known') &&
    !request.nextUrl.pathname.startsWith('/robots.txt') &&
    !request.nextUrl.pathname.startsWith('/sitemap.xml') &&
    !request.nextUrl.pathname.startsWith('/app-ads.txt') &&
    !request.nextUrl.pathname.startsWith('/ads.txt')
  ) {
    response = intlMiddleware(request)
  } else {
    response = NextResponse.next()
  }
  response = await setPidCookie(request, response)
  return response
}

export const config: { matcher: string[] } = {
  matcher: ['/((?!_next).*)']
}

export default middleware
