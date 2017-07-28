import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import PageContainer from './components/PageContainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const PageWrapper = ({children}) => {
      
    window.admin = false
    
    return (
    <PageContainer>
                <title>Buy Aliens on Aliens For Sales!</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Buy aliens art for cheap now or for millions later!" />
                <meta name="keywords" content="aliens,art,buy,cheap,funny,cool,jesus,mary,catholic,prophecy,prophetic,civilizations,history,space,mars,beautiful,interesting,story,faith,angel" />
        <Navbar />
        {children}
        <Footer />
    </PageContainer>
    )
}

export default PageWrapper
