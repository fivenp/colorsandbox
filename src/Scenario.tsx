import React from 'react'
import { Provider } from 'redux-zero/react'
import { View } from '@allthings/elements'
import store from './store/initial'
import ScenarioContainer from './ScenarioContainer'
import { IColors } from './utils/interfaces'

export interface IScenarioProps {
  readonly colorPalette?: IColors
  readonly logo?: React.ReactElement<any>
  readonly menuItem?: React.ReactElement<any>
}
class Scenario extends React.Component<IScenarioProps> {
  public render(): JSX.Element {
    const { colorPalette, logo, menuItem } = this.props

    return (
      <Provider store={store}>
        <View id="RootScenarioContainer" style={{ height: '100%' }}>
          <ScenarioContainer
            colorPalette={colorPalette}
            logo={logo}
            menuItem={menuItem}
          />
        </View>
      </Provider>
    )
  }
}

export default Scenario
