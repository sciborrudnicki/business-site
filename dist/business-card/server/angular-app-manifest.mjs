
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IMYJSVCS.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EXA4UQD2.js",
      "chunk-6LP7LOQ2.js",
      "chunk-NKC3PGVX.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BHUFMPZH.js",
      "chunk-K3IDBIUV.js",
      "chunk-2XLYTIDY.js",
      "chunk-NKC3PGVX.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/achievements"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IUUNPJMZ.js",
      "chunk-NKC3PGVX.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SQW5MMO5.js",
      "chunk-NKC3PGVX.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YFF3JAAL.js",
      "chunk-K3IDBIUV.js",
      "chunk-NKC3PGVX.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y5UESTWO.js",
      "chunk-2XLYTIDY.js",
      "chunk-NKC3PGVX.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/pricing"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P74PIINE.js",
      "chunk-6LP7LOQ2.js",
      "chunk-K3IDBIUV.js",
      "chunk-YELIAYGU.js",
      "chunk-5VFQE77Z.js"
    ],
    "route": "/transformations"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8024, hash: '16cf0ccc30814fa8fa4e24e01dcdf5496b9b4b0f78777d89d7b2f639f116d2cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1460, hash: 'fcf8c4b465afece51d4657cf8a7aad9d67c3260060f5130d478a0942d18785d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 161471, hash: '08db8c34d6ecbea780e571d167cb075dfef8c08c5741048ca9348cbe705a5494', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'index.html': {size: 169077, hash: '8cce10db3703078594342b7c0b1d99243875c4a3a795c57ebff5646b5414211a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 179830, hash: '33cf50a5590704c943e66e91232930a532f72983f5a97709cbc49fb566dd7c83', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 185109, hash: 'de36ecaa40be9ef40a6d7f6d47f710c9245ddf6934578750d6dbf7a2b1238e11', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 171333, hash: 'd7e84e53321c7072e0503d0b9a009ee3981c2779051e0c853b124d9f23c1ca3f', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'achievements/index.html': {size: 162122, hash: '2b7ccf4877ce5ecbd90dc8bcc785d386701358b2244c3ac3b9938cddebc5b302', text: () => import('./assets-chunks/achievements_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 155666, hash: 'eb94ed9c4817962a7f0555ed6e365663d142b9f80f868ec275fb212ab601c8b5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'transformations/index.html': {size: 193662, hash: 'b4dde8ed4d4e081b45f02d7919a7b0ce1600f46945d5b69cafe19ddd97f7b839', text: () => import('./assets-chunks/transformations_index_html.mjs').then(m => m.default)},
    'styles-R5XFEOS5.css': {size: 395742, hash: 'adqnERmNHT0', text: () => import('./assets-chunks/styles-R5XFEOS5_css.mjs').then(m => m.default)}
  },
};
