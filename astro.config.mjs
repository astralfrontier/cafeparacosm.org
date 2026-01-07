// @ts-check
import { defineConfig } from 'astro/config';

import astroBrokenLinksChecker from 'astro-broken-links-checker';
import playformCompress from '@playform/compress';
import compressor from 'astro-compressor';
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroBrokenLinksChecker({
      checkExternalLinks: false,
      throwError: true
    }),
    purgecss(),
    playformCompress(),
    compressor()
  ],
});
