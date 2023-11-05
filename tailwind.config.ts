import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-signin': "url('/signin/soneath4385x3456172ef36b-dbf6-443f-bb6f-c4d77d209ca3-5d1dcbbdc579b__880.jpg')",
        'image-login': "url('/login/ph_22943_145182.jpg')"
      }
    },
  },
  plugins: [],
}
export default config
