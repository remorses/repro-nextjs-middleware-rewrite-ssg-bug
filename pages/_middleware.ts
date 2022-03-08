import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    const { pathname, basePath } = req.nextUrl

    const hostname = req.headers.get('host')?.replace(/:\d+$/, '')

    if (pathname.startsWith('/api') || pathname.startsWith('/_hosts')) {
        return
    }

    return NextResponse.rewrite(
        new URL(
            `${basePath}/_hosts/${hostname}${pathname}`,
            req.nextUrl.origin,
        ).toString(),
    )
}
