// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact()],

  vite: {
    plugins: [tailwindcss()]
  },
  
  site: "https://jovial-gelato-b32983.netlify.app/"
});