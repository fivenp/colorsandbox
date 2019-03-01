import React from 'react'
import { Provider } from 'redux-zero/react'
import { View } from '@allthings/elements'
import store from './store/initial'
import ScenarioContainer from './ScenarioContainer'
import { IColors } from './utils/interfaces'

export interface IScenarioProps {
  readonly activeColor?: number
  readonly activeBackgroundColor?: number
  readonly activeView?: 'ColorDrop' | 'ColorVariations' | 'Typography'
  readonly colors?: IColors
  readonly logo?: React.ReactElement<any>
  readonly menuItem?: React.ReactElement<any>
}
class Scenario extends React.Component<IScenarioProps> {
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
        <View id="RootScenarioContainer" style={{ height: '100%' }}>
          <ScenarioContainer logo={logo} menuItem={menuItem} />
        </View>
      </Provider>
    )
  }
}

export default Scenario
