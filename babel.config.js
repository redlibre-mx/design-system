// Needs a bit of cleanup

module.exports = function (api) {
  // api.cache(false)
  // var isProd = api.cache(() => process.env.NODE_ENV === 'production')
  const isCjs = api.cache(() => process.env.COMPILE_ENV === 'cjs')
  const isEs = api.cache(() => process.env.COMPILE_ENV === 'es')
  const isTest = api.env('test')

  const modules = isEs ? false : 'commonjs'

  const targets = isTest
    ? { node: '12' }
    : isCjs
      ? { esmodules: true }
      : undefined

  // { browsers: '>0.35%, not ie' }

  const presets = [
    [
      '@babel/preset-env',
      {
        modules,
        targets,
        //        debug:true,
      },
    ],
    '@babel/preset-react',
  ]
  const plugins = [
    ['module-resolver', {
      root:['./src'],
    }],
    // ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    /* ['babel-plugin-inline-import', {
      'extensions':[
        '.html',
        '.graphql',
        '.gql'
      ]}], */
    /*
    ['transform-react-remove-prop-types', {
      'mode':'wrap',
    }],
    */
    // ['add-module-exports'],

  ]

  /* We comment out this part because it's probably better to remove the proptypes in the final react app instead of in the compilation process
  if(isEs || isCjs) { plugins.push(
    [
      'transform-react-remove-prop-types',
      {
        removeImport:true
      },
    ],
  )}
	*/

  /* const env = { //UNUSED (??)
    'production': {
      'plugins': ['transform-react-remove-prop-types']
    }
	} */

  return {
    presets,
    plugins,
  }
}
