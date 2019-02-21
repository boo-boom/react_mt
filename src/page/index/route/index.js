import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './Loading'

const Home = Loadable({
  loader: () => import('./../views/Home'),
  loading: Loading
})

const Detail = Loadable({
  loader: () => import('./../views/Detail'),
  loading: Loading
})

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes;
