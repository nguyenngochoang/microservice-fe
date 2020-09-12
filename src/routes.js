import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import UsersIndex from './Components/Users/UsersIndex'
import { Layout } from './Components/Layout/Layout'
import Homepage from './Components/Homepage/Homepage'
import LoginForm from './Components/Authentication/Login/LoginForm'
import Signup from './Components/Authentication/Signup/Signup'
import Products from './Components/Products/Products'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/users_index" component={UsersIndex}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/products" component={Products} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}