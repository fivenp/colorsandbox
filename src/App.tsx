import React, { Component } from 'react'
import { Icon, View } from '@allthings/elements'
import ColorDrop from './containers/ColorDrop'
import Navbar from './containers/Navbar'

export interface IAppState {
  readonly activeColor?: string
}

class App extends React.Component<IAppState> {
  public readonly state = {
    activeColor: 'BlackIntense',
  }
  public render(): JSX.Element {
    document.body.style.backgroundColor = '#ffffff'

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
            <ColorDrop color="#333333" colorName="colorName" />
          </View>
        </View>
      </View>
    )
  }
}

export default App
