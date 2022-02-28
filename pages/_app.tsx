import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className=''>
            <C />
            <Component {...pageProps} />
        </div>
    )
}

function C() {
    const [state, setState] = useState(0)
    useEffect(() => {
        setState((x) => x + 1)
    }, [])
    return <div className=''>{state}</div>
}

export default MyApp
