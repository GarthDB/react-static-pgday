import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Root from './components/root.jsx'
import Index from './components/index.jsx'
import Speaker from './components/speaker.jsx'

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} />
    <Route path="/speaker/:slug" component={Speaker} />
  </Route>
)
