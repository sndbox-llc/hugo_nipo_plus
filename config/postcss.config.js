const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        ...whitelister([
          './node_modules/highlight.js/scss/base16/unikitty-light.scss',
          './node_modules/highlight.js/scss/base16/unikitty-dark.scss',
          './assets/scss/custom/fukidashi.scss',
          './assets/scss/custom/ueda.scss',
          './assets/scss/components/_doks.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_search.scss',
          './assets/scss/common/_dark.scss'
        ]),
      ],
    }),
  ],
}