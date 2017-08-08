import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import Kosan from './modules/Kosan'
import Kos from './modules/Kos'
import Cek from './modules/Cek'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/kosan" component={Kosan}/>
    <Route path="/kosan/:id_kosan" component={Kos}/>
    <Route path="/about" component={About}/>
    <Route path="/cek" component={Cek}/>
  </Router>
), document.getElementById('app'))
