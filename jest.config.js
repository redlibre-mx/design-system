/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
// const esModules = ['@storybook/addon-docs', 'yay'].join('|');

module.exports = {
  cache           :false,
  // https://stackoverflow.com/questions/39418555/syntaxerror-with-jest-and-react-and-importing-css-files
  moduleNameMapper:{
    '^.+\\.(css|scss)$'        :'<rootDir>/config/CSSStub.js',
    '^.+\\.(mdx)$'             :'<rootDir>/config/CSSStub.js',
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^@pareto-engineering/bem$':'identity-obj-proxy',
  },
  transform:{
    '^.+\\.[tj]sx?$':'babel-jest',
    '^.+\\.mdx$'    :'@storybook/addon-docs/jest-transform-mdx',
  },
  setupFiles:['<rootDir>/config/test-setup.js'],
  // transformIgnorePatterns: [`node_modules/(?!${esModules})`],
}
