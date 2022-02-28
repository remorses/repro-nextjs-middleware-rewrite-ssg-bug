import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        fallback: 'blocking',
        paths: [],
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const host = context.params!.host

    return { props: { host }, revalidate: 5 }
}
export default function Page({ host }) {
    return (
        <div>
            <h1>
                Your host is <code>{host}</code>
            </h1>
            <div
                className=''
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <Link href='/'>Path /</Link>
                <Link href='/a'>Path A</Link>
                <Link href='/b'>Path B</Link>
            </div>
        </div>
    )
}
