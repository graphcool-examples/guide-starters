import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import CreatePost from './components/CreatePost'
import CreateUser from './components/CreateUser'
import LoginUser from './components/LoginUser'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'tachyons'

ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/create' component={CreatePost} />
        <Route exact path='/login' component={LoginUser} />
        <Route exact path='/signup' component={CreateUser} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
)
