import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    const { pathname, basePath, locale, defaultLocale } = req.nextUrl

    const hostname = req.headers.get('host')?.replace(/:\d+$/, '')

    // does not work
    // `/_hosts/${hostname}${pathname}`

    return NextResponse.rewrite(
        new URL(
            `${basePath}/${locale}/_hosts/${hostname}${pathname}`,
            req.nextUrl.origin,
        ).toString(),
    )
}
