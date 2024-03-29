import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

import App from './components/app'
import Home from './scenes/Home'
import AboutMe from './scenes/AboutMe'
import Gallery from './scenes/Gallery'
import GallerySingleView from './scenes/GallerySingleView'
import BlogSingleView from './scenes/BlogSingleView'

import Admin from './scenes/Admin'
import Login from './scenes/Admin/Login'
import Dashboard from './scenes/Admin/Dashboard'
import EditGallery from './scenes/Admin/EditGallery'
import AddGallery from './scenes/Admin/AddGallery'
import AddBlog from './scenes/Admin/AddBlog'
import BlogList from './scenes/Admin/BlogList'
import Settings from './scenes/Admin/Settings'
import NotFound from './scenes/NotFound'

const author = "Barrack Obama"
export default (
        <Route path="/" component={App}>
            <IndexRoute component={Home} author={author} />
            <Route path="/about" component={AboutMe} />
            <Route path="/gallery">
                <IndexRoute component={Gallery} author={author} />
                <Route path="/gallery(/:id)" component={GallerySingleView} author={author} />
                <Route path="/blog(/:id)" component={BlogSingleView} author={author} />
            </Route>
            <Route path="/admin" component={Admin}>
                <IndexRoute component={Dashboard} />
                <Route path="/admin/gallery" component={EditGallery} />
                <Route path="/admin/gallery/add" component={AddGallery} />
                <Route path="/admin/blogs" component={BlogList} />
                <Route path="/admin/blogs/add" component={AddBlog} />
                <Route path="/admin/settings" component={Settings} />
            </Route>
            <Route path="/admin/login" component={Login} />
            <Route path="/404" component={NotFound} />
            <Redirect from='*' to='/404' />
        </Route>
)
