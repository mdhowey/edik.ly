import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './App.css'
import routes from '../config/routes'
import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar'

const App = () => {
  return (
    <div>

      < ResponsiveAppBar />

      < Router >

      { routes }

      </ Router >

    </div>
  )
}

export default App;
