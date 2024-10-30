// @ts-check
import stylisticJs from '@stylistic/eslint-plugin-js'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      // Customize stylistic rules as per your preference
      '@stylistic/js/indent': [ 'error', 2 ],
      '@stylistic/js/arrow-parens': [ 'error', 'as-needed' ],
      '@stylistic/js/comma-dangle': [ 'error', 'only-multiline' ],
      '@stylistic/js/quotes': [ 'error', 'single' ],
      '@stylistic/js/semi': [ 'error', 'never' ],
      '@stylistic/js/array-bracket-newline': [ 'error', 'consistent' ],
      '@stylistic/js/array-bracket-spacing': [ 'error', 'always', { 'singleValue': false, 'objectsInArrays': false, 'arraysInArrays': false }],
      '@stylistic/js/array-element-newline': [ 'error', { 'consistent': true, 'multiline': true }],
      '@stylistic/js/object-curly-newline': [ 'error', { consistent: true }],
      '@stylistic/js/object-curly-spacing': [ 'error', 'always', { 'objectsInObjects': false, 'arraysInObjects': false }],
      '@stylistic/js/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true }],
      '@stylistic/js/comma-spacing': [ 'error', { 'before': false, 'after': true }],
      '@stylistic/js/key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true }],
      '@stylistic/js/keyword-spacing': [ 'error', { 'before': true, 'after': true }],
      '@stylistic/js/brace-style': [ 'error', 'stroustrup', { 'allowSingleLine': true }],
      // 
      'vue/brace-style': 'error',
      'vue/no-dupe-keys': 'off',
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/valid-v-for': 0,
      'vue/order-in-components': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-ref-as-operand': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': [ 'error', 'always' ],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            [ 'UNIQUE', 'SLOT' ],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: false,
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'never',
            normal: 'always',
            component: 'always',
          },
        },
      ],
      // 
      // allow async-await
      'generator-star-spacing': 'off',
      // allow paren-less arrow functions
      'arrow-parens': 'off',
      'one-var': 'off',
      'no-void': 'off',
      'multiline-ternary': 'off',

      'import/first': 'off',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-undef': 'off',

      'prefer-promise-reject-errors': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      camelcase: 'warn',
    },
  },
)
