import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './scenes/Home'
import AboutMe from './scenes/AboutMe'
import Gallery from './scenes/Gallery'
import GallerySingleView from './scenes/GallerySingleView'

import Login from './scenes/Admin/Login'

export default (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/gallery">
                <IndexRoute component={Gallery} />
                <Route path="/gallery(/:id)" component={GallerySingleView} />
            </Route>
            <Route path="/admin">
                <Route path="/admin/login" component={Login} />
            </Route>
        </Route>
)
