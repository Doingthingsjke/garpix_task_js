import React from 'react'

import './App.css'
import Navigation from './components/Navigation.js'
// import Home from './components/Home.js'
import Footer from './components/Footer.js'

import Partners from './components/pages/Partners.js'
import Coupons from './components/pages/Coupons.js'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/partners" component={Partners} />
          {/* <Route path="/" component={Home} /> */}
          <Route path="/coupons" component={Coupons} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App
