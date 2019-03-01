import React from 'react'
import { View } from '@allthings/elements'
import { css } from 'glamor'
import { connect } from 'redux-zero/react'
import { combineActions } from 'redux-zero/utils'
import KeyboardNavigationIcon from './components/KeyboardNavigation'
import Text from './components/Text'
import ColorDrop from './containers/ColorDrop'
import ColorList from './containers/ColorList'
import Navbar from './containers/Navbar'
import ColorVariations from './containers/ColorVariations'
import Typography from './containers/Typography'
import { opacity } from './utils/conversions'
import { IColors } from './utils/interfaces'
import { textColors } from './utils/palette'
import { matchingTextColor } from './utils/contrast'
import basicActions from './store/actions/basic'
import navbarActions from './store/actions/navbar'

export interface IColorSandboxContainerProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly activeView: 'ColorDrop' | 'ColorVariations' | 'Typography'
  readonly backgroundColors: IColors
  readonly colors: IColors
  readonly logo?: React.ReactElement<any>
  readonly menuItem?: React.ReactElement<any>
  readonly onBackgroundChange: (color: string) => void
  readonly paletteIsOpen: boolean
  readonly setActiveBackgroundColor: (value: number) => void
  readonly setActiveColor: (value: number) => void
  readonly setActiveView: (value: string) => void
  readonly togglePalette: () => void
}

const styles = {
  none: css({}),
}

class ColorSandboxContainer extends React.Component<
  IColorSandboxContainerProps
> {
  public readonly state = {
    activeColor: this.props.activeColor,
    activeBackgroundColor: this.props.activeBackgroundColor,
    activeView: this.props.activeView,
    colors: this.props.colors,
    backgroundColors: this.props.backgroundColors,
    paletteIsOpen: this.props.paletteIsOpen,
  }

  public nextColor = () => {
    this.props.activeColor !== Object.keys(this.props.colors).length - 1 &&
      this.props.setActiveColor(this.props.activeColor + 1)
  }

  public prevColor = () => {
    this.props.activeColor !== 0 &&
      this.props.setActiveColor(this.props.activeColor - 1)
  }

  public nextBackgroundColor = () => {
    this.props.activeBackgroundColor !==
      Object.keys(this.props.backgroundColors).length - 1 &&
      this.props.setActiveBackgroundColor(this.props.activeBackgroundColor + 1)
  }

  public prevBackgroundColor = () => {
    this.props.activeBackgroundColor !== 0 &&
      this.props.setActiveBackgroundColor(this.props.activeBackgroundColor - 1)
  }

  private checkKey = (e: any) => {
    switch (e.key) {
      case 'ArrowUp':
        this.prevBackgroundColor()
        break
      case 'ArrowDown':
        this.nextBackgroundColor()
        break
      case 'ArrowLeft':
        this.prevColor()
        break
      case 'ArrowRight':
        this.nextColor()
        break
      case 't':
        this.props.setActiveView('Typography')
        break
      case 'f':
        this.props.setActiveView('ColorVariations')
        break
      case 'h':
        this.props.setActiveView('ColorDrop')
        break
      case 'p':
        this.props.togglePalette()
        break
    }
  }

  public render(): JSX.Element {
    const {
      activeColor,
      activeBackgroundColor,
      activeView,
      backgroundColors,
      colors,
      onBackgroundChange,
      paletteIsOpen,
    } = this.props

    onBackgroundChange(Object.values(backgroundColors)[activeBackgroundColor])

    document.onkeydown = this.checkKey

    const color = Object.values(colors)[activeColor]
    const colorName = Object.keys(colors)[activeColor]

    const backgroundColor = Object.values(backgroundColors)[
      activeBackgroundColor
    ]
    const backgroundColorName = Object.keys(backgroundColors)[
      activeBackgroundColor
    ]

    const textColor = matchingTextColor(textColors.dark, backgroundColor)
    const textColorLight = opacity(textColor, 0.4)
    const separatorColor = opacity(textColor, 0.1)

    return (
      <View
        direction="column"
        justify-content="space-between"
        style={{
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}
      >
        <Navbar
          textColor={
            paletteIsOpen // || activeView === 'Typography'
              ? textColors.dark
              : textColor
          }
          textColorLight={
            paletteIsOpen // || activeView === 'Typography'
              ? opacity(textColors.dark, 0.4)
              : textColorLight
          }
          separatorColor={
            paletteIsOpen // || activeView === 'Typography'
              ? opacity(textColors.dark, 0.1)
              : separatorColor
          }
        />
        <ColorList textColor={textColor} />
        <View
          alignH="center"
          alignV="stretch"
          flex={100}
          direction="row"
          style={{
            // minHeight: 490,
            overflowY: 'scroll',
            position: 'relative',
          }}
        >
          <View
            style={{
              position: 'absolute',
              bottom: 5,
              right: 15,
              width: 60,
              height: 60,
              opacity: 0.5,
            }}
          >
            <KeyboardNavigationIcon color={textColorLight} />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
          >
            <Text color={textColor} size="xs">
              {backgroundColorName}
            </Text>
          </View>
          <View
            fill
            style={{
              position: 'relative',
              width: '100%',
            }}
          >
            {activeView === 'ColorDrop' && <ColorDrop />}
            {activeView === 'ColorVariations' && <ColorVariations />}
            {activeView === 'Typography' && <Typography />}
          </View>
        </View>
        <ColorList textColor={textColor} isBottomPalette />
      </View>
    )
  }
}

const mapStateToProps = ({
  activeColor,
  activeBackgroundColor,
  activeView,
  colors,
  paletteIsOpen,
}: any) => ({
  activeColor,
  activeBackgroundColor,
  activeView,
  backgroundColors: { white: '#ffffff', black: '#000000', ...colors },
  colors,
  paletteIsOpen,
})

export default connect(
  mapStateToProps,
  combineActions(basicActions, navbarActions),
)(ColorSandboxContainer)
