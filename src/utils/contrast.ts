import colorContrast from 'color-contrast'
import { textColors } from './palette'

export function contrastRatio(color1: string, color2: string) {
  return colorContrast(color1, color2)
}

export function matchingTextColor(
  textColor: string,
  backgroundColor: string,
  customRatio?: number,
) {
  const CUSTOM_RATIO = customRatio || 5
  const ratio = colorContrast(textColor, backgroundColor)
  if (ratio < CUSTOM_RATIO) {
    const secondRatio = colorContrast(textColors.dark, backgroundColor)
    if (secondRatio < 7) {
      return textColors.bright
    }
    return textColors.dark
  }
  return textColor
}
