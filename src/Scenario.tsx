import React from 'react'
import { Provider } from 'redux-zero/react'
import { View } from '@allthings/elements'
import store from './store/initial'
import ScenarioContainer from './ScenarioContainer'
class Scenario extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <View id="RootScenarioContainer" style={{ height: '100%' }}>
          <ScenarioContainer />
        </View>
      </Provider>
    )
  }
}

export default Scenario
