import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'

export interface IColorListProps {
  readonly color: string
  readonly colorName?: string
}

interface IColorListState {
  readonly color: string
  readonly colorName: string
}

class ColorList extends React.Component<IColorListProps, IColorListState> {
  public readonly state = {
    color: '#000000',
    colorName: '',
  }

  public render(): JSX.Element {
    const { color, colorName } = this.state

    return (
      <View
        flex={20}
        style={{
          backgroundColor: ColorPalette.white,
          maxWidth: 350,
          padding: 12,
          width: '100%',
        }}
      >
        ColorList
      </View>
    )
  }
}

export default ColorList
