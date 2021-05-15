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

const allLetters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', ' 4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', ' K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']

export {
  brandMap,
  wheelMap,
  modalsMap,
  uiMap,
  smMap,
  monochromeMap,
  experimentalMap,
  allLetters,
}
