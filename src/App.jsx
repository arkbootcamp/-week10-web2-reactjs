import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Page/Main/Home/Home'
import About from './Page/Main/About/About'
import NotFound from './Page/Main/Notfound/Notfound'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
     </> 
  )
}
