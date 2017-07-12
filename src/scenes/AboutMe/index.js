import React from 'react'
import { Link } from 'react-router'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'

const AboutMe = (props) => {
    
        return (
            <PageWrapper>
                <div className="main-outer">
                <div className="fauxborder-left main-fauxborder-left">
                <div className="region-inner main-inner">
                <div className="columns fauxcolumns">
                <div className="columns-inner">

                <ColumnContainer type="center">
                    <div className="blog-posts hfeed">

                <div className="date-outer">

                    <div className="date-posts">
                    <div className="post-outer summarized wow bounce">
                    <div className="post hentry" itemProp="blogPost" itemScope="itemscope" itemType="http://schema.org/BlogPosting">
                    <div className="post-body entry-content" id="post-body-5393435426553883135" itemProp="description articleBody">

                        <div className="content" style={{textAlign: "initial", overflow: "auto"}}>
                            <div className="post-title-box">
                                <h2>
                                    <Link to="#">About Me</Link>
                                </h2>
                            </div>
                            <div className="post-meta"></div>
                            <div className="post-summary" style={{marginBottom: "40px"}}>
                                <img alt="My Photo" className="" height="80" src="//1.bp.blogspot.com/-mUS184Gu0I4/TWe0BAeXs0I/AAAAAAAAAAg/_GJt0S5xClo/s80/IMG3386A.jpg" width="60" />
                                <div className="date-header" className="author-name">
                                    My man
                                </div>
                                <hr/>
                                <div className="about-text">Story about me and my favorite chips brand
                                <span>I’m a multi-focused developer working on interfaces and digitalization for businesses and organizations.</span>
                                <br/>
                                <p>Experienced web and mobile developer who specialise in building modern responsive websites and hybrid mobile applications.</p>
                                </div>
                            </div>
                        </div>

                            <div className="material-post-footer">
                                <div className="clear"></div>
                                <div className="clear"></div>
                            </div>

                        </div>
                    </div>
                    </div>
                    </div>

                </div>
                    </div>
                    </ColumnContainer>


                </div>
                <div style={{clear: "both"}} />
                </div>
                </div>
                </div>
                </div>
            </PageWrapper>
        )
}

export default AboutMe
