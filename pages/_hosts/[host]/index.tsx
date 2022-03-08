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

    return {
        props: { host, revalidatedAt: new Date().toISOString() },
        revalidate: false,
    }
}
export default function Page({ host, revalidatedAt }) {
    return (
        <div>
            <h1>
                Your host is <code>{host}</code>
            </h1>
            <p>
                getStaticProps run at <code>{revalidatedAt}</code>
            </p>
            <button
                onClick={async () => {
                    const res = await fetch(
                        `/api/revalidate?path=${encodeURIComponent(
                            '/_hosts/' + host,
                        )}`,
                        {
                            method: 'POST',
                        },
                    )
                    console.log(await res.text())
                }}
            >
                Revalidate this path
            </button>
        </div>
    )
}
