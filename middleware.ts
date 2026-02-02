import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const host = request.headers.get('host')
    const { pathname, search } = request.nextUrl

    // 1. Forzar la redirección de WWW a NO-WWW
    if (host?.startsWith('www.')) {
        const newHost = host.replace('www.', '')
        return NextResponse.redirect(`https://${newHost}${pathname}${search}`, 301)
    }

    return NextResponse.next()
}

// Esto asegura que el middleware no corra en archivos estáticos o internos
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}