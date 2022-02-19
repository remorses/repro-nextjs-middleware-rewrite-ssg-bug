import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async (context) => {
    return {
        fallback: 'blocking',
        paths: [],
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const host = context.params!.host

    return { props: { host }, revalidate: 1 }
}
export default function Page({ host }) {
    return (
        <div>
            <h1>
                Your host is <code>{host}</code>
            </h1>
        </div>
    )
}
