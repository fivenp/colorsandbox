import React from 'react'
import ReactDOM from 'react-dom'
import Scenario from './Scenario'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Scenario />, div)
  ReactDOM.unmountComponentAtNode(div)
})
