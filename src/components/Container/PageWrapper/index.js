import React, { Component } from 'react'
import PageContainer from './components/PageContainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const PageWrapper = (props) => {
      
      const tags = ["story", "label", "alien", "jesus","angel","love"]
        const minList = [
            {title: "Forests And Its Mesmerizing View", date: "05/30/2016"},
            {title: "A Million and One Stars", date: "04/30/2014"},
            {title: "The Cherish Among the Pears", date: "06/23/2017"}
        ]
        
    return (
    <PageContainer>
        <Navbar />
        {props.children}
        <Footer posts={minList} tags={tags} />
    </PageContainer>
    )
}

export default PageWrapper
