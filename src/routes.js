import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Pokedex} />
        <Route path="/:id" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  )
}
