import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'
import Text from '../components/Text'

export interface INavbarProps {}

interface INavbarState {}

class Navbar extends React.Component<INavbarProps, INavbarState> {
  public readonly state = {}

  public render(): JSX.Element {
    const {} = this.state

    return (
      <View
        alignH="center"
        alignV="center"
        style={{
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          height: 40,
        }}
      >
        <Text size="xs">Navbar</Text>
      </View>
    )
  }
}

export default Navbar
