import { NextApiRequest, NextApiResponse } from 'next'
import glob from 'fast-glob'
import fs from 'fs'
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
        // lets lest files in pages
        const rawdata = await fs.readFileSync(`${process.cwd()}/.next/server/pages-manifest.json`)
        const allpages = await glob(`${process.cwd()}/.next/server/**/*`, { onlyFiles: true });
        return res.send({ revalidated: true, total: files.length, paths, globPrefix, allpages, mainfest: JSON.parse(rawdata as any)})
    }
    res.send({ ok: true})
}
