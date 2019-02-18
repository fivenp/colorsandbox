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
