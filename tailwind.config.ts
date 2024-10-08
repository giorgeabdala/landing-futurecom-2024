import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        'polkadot': {
          'rose': '#E6007A',
        },
        'background': {
          'secondary': '#252935',
            'primary': '#191922',
          'header': '#1A1A1A',
          'via-connect': '#16111B',
          'blockchain-rio': '#222222',
          'gradient-init': '#190924',
          'gradient-via': '#1b0e24',
          'polkablock': '#343638',

        }
        ,
      } ,
        fontFamily: {
        'title': ['"Unbounded"', 'cursive'],
        'body': ['"Unbounded"', 'cursive'],
          'background': ['Unbounded', 'cursive'],
        },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui'),
    require("flowbite/plugin")],

  darkMode: ['class', '[data-mode="dark"]'],
}
export default config
