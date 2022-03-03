import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard.js'
import Register from '../pages/Register.js'
import Login from '../pages/Login.js'
// import Login from '../pages/Login/Login'

export default (
    <Routes>
        <Route exact path='/' element={< Dashboard />} />
        <Route path='/register' element={< Register />} />
        <Route path='/login' element={< Login />} />
        {/* <Route path='/login' element={< Login />} /> */}
    </Routes>
)
