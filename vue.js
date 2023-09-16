// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  globals: {
    // Reactivity Transform
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // script setup
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',

        // RFC: https://github.com/vuejs/rfcs/discussions/430
        defineOptions: 'readonly',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  extends: ['prettier', 'plugin:vue/vue3-recommended'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    // Reactivity Transform
    'vue/no-setup-props-destructure': 'off',
    'vue/component-tags-order': [
      'error',
      { order: ['script', 'template', 'style'] },
    ],
  },
});
