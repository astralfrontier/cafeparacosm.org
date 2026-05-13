// @ts-check
import { defineConfig } from 'astro/config';

import astroBrokenLinksChecker from 'astro-broken-links-checker';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
import purgecss from 'astro-purgecss';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(), react(),
    astroBrokenLinksChecker({
      checkExternalLinks: false,
      throwError: true
    }),
    purgecss(),
    playformCompress(),
    compressor()
  ],
  vite: {
    plugins: [yaml()]
  }
});