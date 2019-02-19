import React from 'react'
import { Provider } from 'redux-zero/react'
import { View } from '@allthings/elements'
import store from './store/initial'
import Scenario from './Scenario'
class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <View id="RootScenarioContainer" style={{ height: '100%' }}>
          <Scenario />
        </View>
      </Provider>
    )
  }
}

export default App
