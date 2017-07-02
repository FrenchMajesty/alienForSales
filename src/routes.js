import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './scenes/Home'
import AboutMe from './scenes/AboutMe'
import Gallery from './scenes/Gallery'


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/gallery" component={Gallery} />
    </Route>
);
