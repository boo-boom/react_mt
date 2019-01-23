import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Main from './Main'

const AllRoutes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </HashRouter>
)

export default AllRoutes;

