import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        fallback: 'blocking',
        paths: [],
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const host = context.params!.host
    const locale = context.locale
    return { props: { host, locale }, revalidate: 1 }
}
export default function Page({ host }) {
    const router = useRouter()
    const { locale, defaultLocale, pathname, asPath } = router
    return (
        <div>
            <h1>
                Your host is <code>{host}</code> and your locale is{' '}
                <code>{locale}</code>
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <button
                    onClick={() => {
                        router.push({ pathname }, asPath, { locale: 'fr' })
                    }}
                >
                    set locale to fr
                </button>
                <button
                    onClick={() => {
                        router.push({ pathname }, asPath, { locale: 'en' })
                    }}
                >
                    set locale to en
                </button>
            </div>
        </div>
    )
}
