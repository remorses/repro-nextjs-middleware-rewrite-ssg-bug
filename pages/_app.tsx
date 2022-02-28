import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeError', (e) =>
            console.error('routeChangeError', e),
        )
    }, [])
    return (
        <div className=''>
            <C />
            <Component {...pageProps} />
        </div>
    )
}

function C() {
    const [state, setState] = useState(() => Math.random())
    return <div className=''>{state}</div>
}

export default MyApp
