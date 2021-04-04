import {
  THEME,
  WHEEL,
  MODALS,
  UI,
  SM,
  MONOCHROME,
  EXPERIMENTAL,
} from '../colors'

const getColorMap = (prefix, list) => {
  const a = []
  list.forEach((color) => a.push({
    title :`${prefix}.${color}`,
    // subtitle:'',
    colors:[
      `var(--dark-${color})`,
      `var(--${color})`,
      `var(--light-${color})`,
      `var(--on-${color})`,
    ],
  }))
  return a
}

const brandMap = getColorMap('colorschemes.light.brand', THEME)
const wheelMap = getColorMap('colorschemes.light.wheel', WHEEL)
const modalsMap = getColorMap('colorschemes.light.modals', MODALS)
const experimentalMap = getColorMap('colorschemes.light.experimental', EXPERIMENTAL)
const uiMap = getColorMap('colorschemes.light.ui', UI)

const smMap = getColorMap('palettes.social-media', SM)
const monochromeMap = getColorMap('palettes.momochrome', MONOCHROME)

export {
  brandMap,
  wheelMap,
  modalsMap,
  uiMap,
  smMap,
  monochromeMap,
  experimentalMap,
}
