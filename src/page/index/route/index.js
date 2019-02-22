import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from './Loadable'

const Home = Loadable(() => import('@index/views/Home'))
const Detail = Loadable(() => import('@index/views/Detail'))
const My = Loadable(() => import('@index/views/My'))

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/my" component={My} />
        <Redirect to="/"></Redirect>
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Routes;
