import * as convert from 'color-convert'

export function lighten(color: string) {
  let hsl = convert.hex.hsl(color)
  hsl[1] = hsl[1] >= 10 ? hsl[1] - 10 : 0
  hsl[2] = hsl[2] <= 90 ? hsl[2] + 10 : 100
  return `#${convert.hsl.hex(hsl)}`
}

export function darken(color: string) {
  let hsl = convert.hex.hsl(color)
  hsl[1] = hsl[1] <= 90 ? hsl[1] + 10 : 100
  hsl[2] = hsl[2] >= 10 ? hsl[2] - 10 : 0
  return `#${convert.hsl.hex(hsl)}`
}

// Kindly borrowed from
// https://github.com/allthings/colors/blob/master/src/alpha.js
export function opacity(
  color: string,
  opacity: number,
  actualColor?: boolean,
  blendingColor?: string,
) {
  const rgb = convert.hex.rgb(color)
  if (rgb === null) {
    throw new Error(
      `\`hex\` value provided to \`alpha\` is not a HEX color, \`${color}\` given.`,
    )
  }

  return actualColor
    ? calculateTransparentColor(color, opacity, blendingColor)
    : `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`
}

function calculateTransparentColor(
  color: string,
  opacity: number,
  blendingColor?: string,
) {
  const actualColor = convert.hex.rgb(color)
  const blendColor = blendingColor
    ? convert.hex.rgb(blendingColor)
    : [255, 255, 255]

  return `#${convert.rgb.hex([
    (1 - opacity) * blendColor[0] + opacity * actualColor[0],
    (1 - opacity) * blendColor[1] + opacity * actualColor[1],
    (1 - opacity) * blendColor[2] + opacity * actualColor[2],
  ])}`
}
