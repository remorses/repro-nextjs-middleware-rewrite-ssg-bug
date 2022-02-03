import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
    const { pathname, basePath } = req.nextUrl
    console.log({ basePath })

    const hostname = req.headers.get('host')?.replace(/:\d+$/, '')

    // does not work
    // new URL(`/_hosts/${hostname}${pathname}`,req.nextUrl.origin,).toString()

    // does not work
    // `/_hosts/${hostname}${pathname}`

    // works!
    // new URL(`${basePath}/_hosts/${hostname}${pathname}`, req.nextUrl.origin, ).toString()

    return NextResponse.rewrite(
        new URL(
            `${basePath}/_hosts/${hostname}${pathname}`,
            req.nextUrl.origin,
        ).toString(),
    )
}
