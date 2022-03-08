export default async function handler(req, res) {
    try {
        const p = req.query.path
        console.log('revalidating', p)
        await res.unstable_revalidate(p)
        return res.send('revalidated')
    } catch (err) {
        console.error(err)
        return res.status(500).send('Error revalidating')
    }
}
