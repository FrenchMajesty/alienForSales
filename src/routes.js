import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './scenes/Home'
import AboutMe from './scenes/AboutMe'
import Gallery from './scenes/Gallery'
import GallerySingleView from './scenes/GallerySingleView'

import Admin from './scenes/Admin'
import Login from './scenes/Admin/Login'
import Dashboard from './scenes/Admin/Dashboard'
import EditGallery from './scenes/Admin/EditGallery'
import AddGallery from './scenes/Admin/AddGallery'
import AddBlog from './scenes/Admin/AddBlog'


export default (
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/gallery">
                <IndexRoute component={Gallery} />
                <Route path="/gallery(/:id)" component={GallerySingleView} />
            </Route>
            <Route path="/admin" component={Admin}>
                <Route path="/admin/index" component={Dashboard} />
                <Route path="/admin/login" component={Login} />
                <Route path="/admin/gallery" component={EditGallery} />
                <Route path="/admin/gallery/add" component={AddGallery} />
                <Route path="/admin/blogs/add" component={AddBlog} />
            </Route>
        </Route>
)
