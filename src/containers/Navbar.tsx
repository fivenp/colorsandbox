import * as React from 'react'
import { alpha, ColorPalette } from '@allthings/colors'
import { Icon, View } from '@allthings/elements'
import Logo from '../components/Logo'

import IosColorPaletteOutline from 'react-ionicons/lib/IosColorPaletteOutline'
import IosColorPalette from 'react-ionicons/lib/IosColorPalette'
import IosColorFillOutline from 'react-ionicons/lib/IosColorFillOutline'
import IosColorFill from 'react-ionicons/lib/IosColorFill'
import IosColorFilterOutline from 'react-ionicons/lib/IosColorFilterOutline'
import IosColorFilter from 'react-ionicons/lib/IosColorFilter'
import IosListBoxOutline from 'react-ionicons/lib/IosListBoxOutline'
import IosListBox from 'react-ionicons/lib/IosListBox'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import { css, style } from 'glamor'

export interface INavbarProps {
  readonly activeView: string
  readonly paletteIsOpen?: boolean
  readonly separatorColor: string
  readonly textColor: string
  readonly textColorLight: string
}

interface INavbarState {
  activeView: string
  paletteIsOpen: boolean
}

const styles = {
  icon: css({
    marginLeft: 10,
    opacity: 0.6,
    padding: 10,
    transition: 'opacity 0.3s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      opacity: 8,
    },
  }),
  activeIcon: css({
    opacity: 1,
  }),
}

class Navbar extends React.Component<INavbarProps, INavbarState> {
  public readonly state = {
    activeView: 'ColorDrop',
    paletteIsOpen: false,
  }

  public onIconClick = (view: string) => {
    this.setState({ activeView: view })
  }

  public togglePalette = () => {
    this.setState({ paletteIsOpen: !this.state.paletteIsOpen })
  }

  public render(): JSX.Element {
    const { activeView, paletteIsOpen } = this.state
    const { separatorColor, textColor, textColorLight } = this.props

    return (
      <View
        alignV="center"
        alignH="space-between"
        direction="row"
        style={{
          borderBottom: `1px solid ${separatorColor}`,
          height: 40,
        }}
      >
        <Logo />
        <View direction="row" alignV="center" style={{ marginRight: 10 }}>
          {paletteIsOpen === true ? (
            <View
              onClick={this.togglePalette}
              {...css([styles.icon, styles.activeIcon])}
              title="Toggle my Color Palette"
            >
              <IosColorPalette color={textColor} />
            </View>
          ) : (
            <View
              onClick={this.togglePalette}
              {...styles.icon}
              title="Toggle my Color Palette"
            >
              <IosColorPaletteOutline color={textColor} />
            </View>
          )}

          {activeView === 'ColorDrop' ? (
            <View
              {...css([styles.icon, styles.activeIcon])}
              title="Color harmony view"
            >
              <IosColorFilter color={textColor} />
            </View>
          ) : (
            <View
              onClick={() => {
                this.onIconClick('ColorDrop')
              }}
              {...styles.icon}
              title="Color harmony view"
            >
              <IosColorFilterOutline color={textColor} />
            </View>
          )}

          {activeView === 'ColorVariations' ? (
            <View
              {...css([styles.icon, styles.activeIcon])}
              title="Fullsize color view"
            >
              <IosColorFill color={textColor} />
            </View>
          ) : (
            <View
              onClick={() => {
                this.onIconClick('ColorVariations')
              }}
              {...styles.icon}
              title="Fullsize color view"
            >
              <IosColorFillOutline color={textColor} />
            </View>
          )}

          {activeView === 'Typography' ? (
            <View
              {...css([styles.icon, styles.activeIcon])}
              title="Typography view"
            >
              <IosListBox color={textColor} />
            </View>
          ) : (
            <View
              onClick={() => {
                this.onIconClick('Typography')
              }}
              {...styles.icon}
              title="Typography view"
            >
              <IosListBoxOutline color={textColor} />
            </View>
          )}

          <View
            onClick={() =>
              window.open('https://github.com/fivenp/scenario', '_blank')
            }
            {...styles.icon}
            title="Scenario - ColorPalette Documentation"
          >
            <LogoGithub color={textColor} />
          </View>
        </View>
      </View>
    )
  }
}

export default Navbar
