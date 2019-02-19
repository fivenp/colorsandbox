import React from 'react'
import { alpha } from '@allthings/colors'
import { Text, View } from '@allthings/elements'
import { connect } from 'redux-zero/react'
import KeyboardNavigationIcon from './components/KeyboardNavigation'
import ColorDrop from './containers/ColorDrop'
import Navbar from './containers/Navbar'
import { textColors } from './utils/palette'
import { matchingTextColor } from './utils/contrast'

export interface IScenarioProps {
  readonly activeColor: number
  readonly activeBackgroundColor: number
  readonly activeView: string
  readonly backgroundColors: IColors
  readonly colors: IColors
}

export interface IColors {
  readonly [key: string]: string
}

class Scenario extends React.Component<IScenarioProps> {
  public readonly state = {
    activeColor: this.props.activeColor,
    activeBackgroundColor: this.props.activeBackgroundColor,
    activeView: this.props.activeView,
    colors: this.props.colors,
    backgroundColors: this.props.backgroundColors,
  }

  public nextColor = () => {
    this.state.activeColor !== Object.keys(this.props.colors).length - 1 &&
      this.setState({ activeColor: this.state.activeColor + 1 })
  }

  public prevColor = () => {
    this.state.activeColor !== 0 &&
      this.setState({ activeColor: this.state.activeColor - 1 })
  }

  public nextBackgroundColor = () => {
    this.state.activeBackgroundColor !==
      Object.keys(this.state.backgroundColors).length - 1 &&
      this.setState({
        activeBackgroundColor: this.state.activeBackgroundColor + 1,
      })
  }

  public prevBackgroundColor = () => {
    this.state.activeBackgroundColor !== 0 &&
      this.setState({
        activeBackgroundColor: this.state.activeBackgroundColor - 1,
      })
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
    }
  }

  public render(): JSX.Element {
    const {
      activeView,
      colors,
      backgroundColors,
      activeColor,
      activeBackgroundColor,
    } = this.state

    document.body.style.backgroundColor = Object.values(backgroundColors)[
      activeBackgroundColor
    ]
    document.onkeydown = this.checkKey

    const color = Object.values(colors)[activeColor]
    const colorName = Object.keys(colors)[activeColor]

    const backgroundColorName = Object.keys(backgroundColors)[
      activeBackgroundColor
    ]

    const textColor = matchingTextColor(
      textColors.dark,
      document.body.style.backgroundColor,
    )
    const textColorLight = alpha(textColor, 0.4)
    const separatorColor = alpha(textColor, 0.1)

    return (
      <View
        direction="column"
        fill
        style={{
          height: '100%',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}
      >
        <Navbar
          textColor={textColor}
          textColorLight={textColorLight}
          separatorColor={separatorColor}
        />
        <View alignH="center" alignV="stretch" fill direction="row">
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
            // flex={80}
            style={{
              minHeight: 490,
              overflowY: 'scroll',
              position: 'relative',
            }}
          >
            <ColorDrop color={color} colorName={colorName} />
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({
  activeColor,
  activeBackgroundColor,
  activeView,
  colors,
}: any) => ({
  activeColor,
  activeBackgroundColor,
  activeView,
  backgroundColors: { white: '#ffffff', ...colors },
  colors,
})

export default connect(mapStateToProps)(Scenario)
