import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import Login from './components/Login'

export default (
  <Route name="app" component={App} path="/">
    <Route path="/Login" component={Login}/>
  </Route>
)