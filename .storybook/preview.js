import '../src/local.scss'
import '@pareto-engineering/styles/dist/main.min.css'

export const parameters = {
  layout:'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  themes: [
    { name: 'Colorscheme Light', class: 'ui-light', color: '#EFEFEF', default: true },
    { name: 'Colorscheme Dark', class: 'ui-dark', color: '#121212' }
  ],
}
