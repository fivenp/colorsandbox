import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'

export interface ITypographyProps {
  readonly color: string
  readonly colorName?: string
}

interface ITypographyState {
  readonly color: string
  readonly colorName: string
}

class Typography extends React.Component<ITypographyProps, ITypographyState> {
  public readonly state = {
    color: '#000000',
    colorName: '',
  }

  public render(): JSX.Element {
    const { color, colorName } = this.state

    return <View direction="row" fill alignH="center" alignV="center" />
  }
}

export default Typography
