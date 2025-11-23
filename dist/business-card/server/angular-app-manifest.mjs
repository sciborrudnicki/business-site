
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
    'index.csr.html': {size: 14328, hash: '99c45d733356eeca6d90d30e631d6b7c7c2a375004873d6ba90228999057ffe3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1460, hash: 'c5981b7dcbf25cad320c9272cafce94ab9fe681c2e06a9977abe5da5765c9b61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 177836, hash: '3e98201f55c46687eb1c53f69d2df8be39a965c4b444764768ff98180f0d5391', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 191657, hash: 'dfb56e3680f0429346f34e93926fc272578c3770b9f8acc6b3aff8413ea1233f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 175580, hash: '60b88057f4e11d8295d9e80e7749d278741a5ddc1504c6f551ce401fcf09337a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'achievements/index.html': {size: 168892, hash: 'bd913178170edb01565d8e99b6f1f9c7662a607c6445d45f22267f537f8c34b1', text: () => import('./assets-chunks/achievements_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 186333, hash: 'c7a569c710b5b400c647c7bc3aee9d80d645d6c821e99b9cbd7bb4d8fb499398', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 168209, hash: '28246468c71c266e34cbab2372402e6e8d7e23e938dab7246206350ea9802ee5', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'transformations/index.html': {size: 200129, hash: '363c13927f95eb779656f79f73f1b9084f76d6d38a4d79dc8c315b827cebe4c2', text: () => import('./assets-chunks/transformations_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 162169, hash: '00cb71c528bf8264cd756d2ddff2e5a8339e4ab4e156c13c350af5ec29e4ad88', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-4ZVF67YA.css': {size: 442333, hash: '0cOYqNq5zA0', text: () => import('./assets-chunks/styles-4ZVF67YA_css.mjs').then(m => m.default)}
  },
};
