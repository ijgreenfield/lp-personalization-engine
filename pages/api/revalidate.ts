import { NextApiRequest, NextApiResponse } from 'next'
import glob from 'fast-glob'
interface HookData {
    operation: 'delete' | 'publish' | 'unpublish' | 'archive';
    modelName: string;
    newValue: { data: { url: string }};
    previousValue: {data: { url: string}};
}

/**
 * API to revalidate personalized pages
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const hookData: HookData = req.body;
    const value = hookData.newValue || hookData.previousValue;
    const url = value?.data?.url || String(req.query.url);
    // todo: secret
    if (url) {
        const globPrefix = `${process.cwd()}/.next/server/pages/`
        const files = await glob(`${globPrefix}builder/*::${encodeURIComponent(url)}.html`);
        const paths = files.map((file) => `/${file.replace('.html', '').replace(globPrefix, '')}`);
        await Promise.all(paths.map(path => res.revalidate(path)));
        return res.send({ revalidated: true, total: files.length, paths, globPrefix})
    }
    res.send({ ok: true})
}
