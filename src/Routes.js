import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Results from './Results'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
      </Switch>
    )
  }
}

export default Routes
