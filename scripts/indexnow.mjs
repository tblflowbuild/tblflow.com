/**
 * Pings IndexNow (Bing, Yandex, Seznam, Naver…) with every URL of the built
 * sitemap, so a deployment is picked up without waiting for a crawl. The key is
 * public by design: it is served at /<key>.txt to prove the site owns it.
 * Run after a deploy: `node scripts/indexnow.mjs`.
 */
import { readFileSync } from 'node:fs';

const KEY = '04b6468ecddeb2993b15268380d4138c';
const HOST = 'tblflow.com';
const xml = readFileSync('dist/sitemap-0.xml', 'utf8');
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`indexnow: ${res.status} ${res.statusText} — ${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);
