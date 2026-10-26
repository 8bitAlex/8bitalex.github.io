import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

// eslint-config-next v16 ships flat config directly, so these are spread in
// rather than bridged through FlatCompat. The compat layer could not validate
// them: a flat config carries circular plugin references, which the eslintrc
// schema validator tries to JSON.stringify.
/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  { ignores: ['.next/**', 'out/**', '.open-next/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      'max-len': ['warn', { code: 120 }]
    }
  }
]

export default eslintConfig
