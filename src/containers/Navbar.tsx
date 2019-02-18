import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'
import Logo from '../components/Logo'

export interface INavbarProps {
  separatorColor: string
}

interface INavbarState {}

class Navbar extends React.Component<INavbarProps, INavbarState> {
  public readonly state = {}

  public render(): JSX.Element {
    const { separatorColor } = this.props

    return (
      <View
        alignH="center"
        alignV="center"
        style={{
          borderBottom: `1px solid ${separatorColor}`,
          height: 40,
        }}
      >
        <Logo />
      </View>
    )
  }
}

export default Navbar
