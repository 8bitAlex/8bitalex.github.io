import { type Options } from 'prettier'

const config: Options = {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/style/tailwind.css',
  printWidth: 90
}

export default config
