import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'

export interface IColorVariationsProps {
  readonly color: string
  readonly colorName?: string
}

interface IColorVariationsState {
  readonly color: string
  readonly colorName: string
}

class ColorVariations extends React.Component<
  IColorVariationsProps,
  IColorVariationsState
> {
  public readonly state = {
    color: '#000000',
    colorName: '',
  }

  public render(): JSX.Element {
    const { color, colorName } = this.state

    return <View direction="row" fill alignH="center" alignV="center" />
  }
}

export default ColorVariations
