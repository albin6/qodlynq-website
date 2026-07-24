import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'QODLYNQ | Precision Software Systems',
    short_name: 'QODLYNQ',
    description: 'We architect precision software systems, infrastructure as code, and enterprise APIs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F3ED',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
