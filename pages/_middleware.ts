import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl

    const hostname = req.headers.get('host')?.replace(/:\d+$/, '')

    return NextResponse.rewrite(
        new URL(
            `/_hosts/${hostname}${pathname}`,
            req.nextUrl.origin,
        ).toString(),
    )
}
