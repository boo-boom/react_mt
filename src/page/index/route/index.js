import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './../views/Home'
import Detail from './../views/Detail'

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes;
