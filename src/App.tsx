import React, { Component } from 'react'
import { Icon, View } from '@allthings/elements'
import ColorDrop from './containers/ColorDrop'
import Navbar from './containers/Navbar'
import { colors } from './utils/palette'

export interface IAppState {
  readonly activeColor?: number
}

const backgroundColors = { white: '#ffffff', ...colors }

class App extends React.Component<IAppState> {
  public readonly state = {
    activeColor: 0,
    activeBackgroundColor: 0,
  }

  public nextColor = () => {
    this.state.activeColor !== Object.keys(colors).length - 1 &&
      this.setState({ activeColor: this.state.activeColor + 1 })
  }

  public prevColor = () => {
    this.state.activeColor !== 0 &&
      this.setState({ activeColor: this.state.activeColor - 1 })
  }

  public nextBackgroundColor = () => {
    this.state.activeBackgroundColor !==
      Object.keys(backgroundColors).length - 1 &&
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
    document.body.style.backgroundColor = Object.values(backgroundColors)[
      this.state.activeBackgroundColor
    ]
    document.onkeydown = this.checkKey

    const color = Object.values(colors)[this.state.activeColor]
    const colorName = Object.keys(colors)[this.state.activeColor]

    console.log(color)

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
        <Navbar />
        <View alignH="center" alignV="stretch" fill direction="row">
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

export default App
