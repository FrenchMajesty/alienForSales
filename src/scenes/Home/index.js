import React, { Component } from 'react'
import { Link } from 'react-router'
import Navbar from '~/components/Navbar'
import BlogEntry from './components/BlogEntry'
import PageContainer from '~/components/PageContainer'
import SideBarWidget from '~/components/SideBarWidget'
import ColumnContainer from '~/components/ColumnContainer'
import Footer from '~/components/Footer'
import Pager from '~/components/ColumnContainer/components/Pager'

class Home extends Component {

    render() {

        const data = {
            title: "Forests And Its Mesmerizing View",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non ex venenatis, egestas est vitae, lacinia libero. Sed pretium aliquet...",
            tags: ["story", "label"],
            date: "05/30/2015",
            stock: 10
        }

        const author = "Barrack Obama"
        const tags = ["story", "label", "alien", "jesus","angel","love"]
        const minList = [
            {title: "Forests And Its Mesmerizing View", date: "05/30/2016"},
            {title: "A Million and One Stars", date: "04/30/2014"},
            {title: "The Cherish Among the Pears", date: "06/23/2017"}
        ]


        return (
            <PageContainer>
                <Navbar />

            <div className="main-outer">
            <div className="fauxborder-left main-fauxborder-left">
            <div className="region-inner main-inner">
            <div className="columns fauxcolumns">
            <div className="columns-inner">

            <ColumnContainer type="center">
                <div className="blog-posts hfeed">
                    <BlogEntry data={data} author={author} />
                </div>
                    <Pager />
                    <div className="blog-feeds">
                        <div className="feed-links">
                            Click here to: <Link to="#" className="feed-link" target="_blank">Subscribe to my blog</Link>
                        </div>
                    </div>
                </ColumnContainer>

            <ColumnContainer type="right">
                    <SideBarWidget title="About me">
                        <Link to="#">
                            <img alt="My Photo" className="profile-img" height="80" src="//1.bp.blogspot.com/-mUS184Gu0I4/TWe0BAeXs0I/AAAAAAAAAAg/_GJt0S5xClo/s80/IMG3386A.jpg" width="60" />
                        </Link>
                        <dl className="profile-datablock">
                            <dt className="profile-data">
                                <Link className="profile-name-link g-profile" href="#" rel="author" data-gapiscan="true" data-onload="true" data-gapiattached="true">
                                    Deepak Kamat
                                </Link>
                            </dt>
                            <dd className="profile-textblock">A passionate programmer, web developer and designer. Ready to learn anything new..</dd>
                        </dl>
                        <Link to="#" className="profile-link" rel="author" style={{textAlign: "center"}}>
                            View my complete profile
                        </Link>
                    </SideBarWidget>
                </ColumnContainer>
            </div>
            <div style={{clear: "both"}} />
            </div>
            </div>
            </div>
            </div>
            <Footer posts={minList} tags={tags} />
            </PageContainer>
        )
    }
}

export default Home
