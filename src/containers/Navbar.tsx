import * as React from 'react'
import { View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
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
import { css } from 'glamor'

import navbarActions from '../store/actions/navbar'

export interface INavbarProps {
  readonly activeView: string
  readonly paletteIsOpen: boolean
  readonly separatorColor: string
  readonly textColor: string
  readonly textColorLight: string
  readonly togglePalette: () => void
  readonly setActiveView: (value: string) => void
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
    paddingLeft: 15,
    paddingBottom: 5,
    transition: 'opacity 0.3s ease-in-out',
    cursor: 'pointer',
    borderLeft: '1px solid #efefef',
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
    activeView: this.props.activeView,
    paletteIsOpen: this.props.paletteIsOpen,
  }

  public render(): JSX.Element {
    const {
      activeView,
      paletteIsOpen,
      separatorColor,
      textColor,
      textColorLight,
    } = this.props

    return (
      <View
        alignV="center"
        alignH="space-between"
        direction="row"
        style={{
          transition: 'background-color 0.2s ease-in-out',
          backgroundColor:
            paletteIsOpen /*|| activeView === 'Typography'*/ && '#ffffff',
          borderBottom: `1px solid ${separatorColor}`,
          height: 40,
        }}
      >
        <Logo />
        <View direction="row" alignV="center" style={{ marginRight: 10 }}>
          {paletteIsOpen === true ? (
            <View
              onClick={this.props.togglePalette}
              {...css([
                styles.icon,
                styles.activeIcon,
                { borderLeftColor: separatorColor },
              ])}
              title="(p) Toggle my Color Palette"
            >
              <IosColorPalette color={textColor} />
            </View>
          ) : (
            <View
              onClick={this.props.togglePalette}
              {...css([styles.icon, { borderLeftColor: separatorColor }])}
              title="(p) Toggle my Color Palette"
            >
              <IosColorPaletteOutline color={textColor} />
            </View>
          )}

          {activeView === 'ColorDrop' ? (
            <View
              {...css([
                styles.icon,
                styles.activeIcon,
                { borderLeftColor: separatorColor },
              ])}
              title="(h) Color harmony view"
            >
              <IosColorFilter color={textColor} />
            </View>
          ) : (
            <View
              onClick={() => {
                this.props.setActiveView('ColorDrop')
              }}
              {...css([styles.icon, { borderLeftColor: separatorColor }])}
              title="(h) Color harmony view"
            >
              <IosColorFilterOutline color={textColor} />
            </View>
          )}

          {activeView === 'ColorVariations' ? (
            <View
              {...css([
                styles.icon,
                styles.activeIcon,
                { borderLeftColor: separatorColor },
              ])}
              title="(f) Fullsize color view"
            >
              <IosColorFill color={textColor} />
            </View>
          ) : (
            <View
              onClick={() => {
                this.props.setActiveView('ColorVariations')
              }}
              {...css([styles.icon, { borderLeftColor: separatorColor }])}
              title="(f) Fullsize color view"
            >
              <IosColorFillOutline color={textColor} />
            </View>
          )}

          {activeView === 'Typography' ? (
            <View
              {...css([
                styles.icon,
                styles.activeIcon,
                { borderLeftColor: separatorColor },
              ])}
              title="(t) Typography view"
            >
              <IosListBox color={textColor} />
            </View>
          ) : (
            <View
              onClick={() => {
                this.props.setActiveView('Typography')
              }}
              {...css([styles.icon, { borderLeftColor: separatorColor }])}
              title="(t) Typography view"
            >
              <IosListBoxOutline color={textColor} />
            </View>
          )}

          <View
            onClick={() =>
              window.open('https://github.com/fivenp/colorsandbox', '_blank')
            }
            {...css([styles.icon, { borderLeftColor: separatorColor }])}
            title="ColorSandbox - ColorPalette Documentation"
          >
            <LogoGithub color={textColor} />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ activeView, paletteIsOpen }: any) => ({
  activeView,
  paletteIsOpen,
})

export default connect(
  mapStateToProps,
  navbarActions,
)(Navbar)
