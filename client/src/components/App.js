import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './App.css'
import routes from '../config/routes.js'

const App = () => {
  return (
    <div>

      <h1>edik.ly</h1>

      < Router >

      { routes }

      </ Router >

    </div>
  )
}

export default App;
