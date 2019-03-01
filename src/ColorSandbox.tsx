import React from 'react'
import { Provider } from 'redux-zero/react'
import { View } from '@allthings/elements'
import store from './store/initial'
import ColorSandboxContainer from './ColorSandboxContainer'
import { IColors } from './utils/interfaces'

export interface IColorSandboxProps {
  readonly activeColor?: number
  readonly activeBackgroundColor?: number
  readonly activeView?: 'ColorDrop' | 'ColorVariations' | 'Typography'
  readonly colors?: IColors
  readonly logo?: React.ReactElement<any>
  readonly menuItem?: React.ReactElement<any>
}

export interface IColorSandboxState {
  readonly container?: HTMLDivElement
}
class ColorSandbox extends React.Component<
  IColorSandboxProps,
  IColorSandboxState
> {
  state = { container: document.createElement('div') }

  setContainerRef = (containerEl: HTMLDivElement) =>
    this.setState({ container: containerEl })

  public handleBackgroundColorChange = (color: string) => {
    this.state.container.style.backgroundColor = color
  }

  public render(): JSX.Element {
    const {
      activeBackgroundColor,
      activeColor,
      activeView,
      colors,
      logo,
      menuItem,
    } = this.props

    activeBackgroundColor && store.setState({ activeBackgroundColor })
    activeColor && store.setState({ activeColor })
    activeView && store.setState({ activeView })
    colors && store.setState({ colors })

    return (
      <Provider store={store}>
        <View
          id="ColorSandboxContainer"
          onRef={this.setContainerRef}
          style={{ height: '100%', transition: 'background 0.5s ease-in-out' }}
        >
          <ColorSandboxContainer
            onBackgroundChange={this.handleBackgroundColorChange}
            logo={logo}
            menuItem={menuItem}
          />
        </View>
      </Provider>
    )
  }
}

export default ColorSandbox
