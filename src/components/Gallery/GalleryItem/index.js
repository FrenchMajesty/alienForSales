import React from 'react'
import { Link } from 'react-router'
import RoundActionButton from './components/RoundActionButton'

const GalleryItem = (props) => {
    
    const {data, author} = props
    
    const renderFooter = () => {
        return (
            <div className="post-footer item-footer" style={{textAlign: "initial"}}>
                <div className="post-footer-line post-footer-line-1">
                    <span className="post-author vcard">By {author}</span>
                    <RoundActionButton icon={"attach_money"} title={data.stock+" left in stock!"} />
                    <div className="post-share-buttons goog-inline-block"></div>
                </div>
                
            </div>
        )
    }
    
    const renderHead = () => {
        return (
            <div className="date-header item-date">
                <span className="out">
                    <i className="fa fa-fw fa-calendar"></i>
                    <span className="dte">{formatDate(data.date)}</span>
                </span>
            </div>
        )
    }
    
    const formatDate = (date) => {
        const d = new Date(date)
        return d.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    }
    
    return (
         <div className="date-outer gallery-card">

                {renderHead()}

                <div className="date-posts gallery-item">
                <div className="post-outer summarized wow fadeInLeft">
                <div className="post hentry" itemProp="blogPost" itemScope="itemscope" itemType="http://schema.org/BlogPosting">
                <div className="post-body entry-content" id="post-body-5393435426553883135" itemProp="description articleBody">

                     <div className="media-box image">
                        <div className="overlay-img"></div>
                        <Link to="#" className="post-url"></Link>
                        <img className="image" src="http://4.bp.blogspot.com/-TPrTQfHEaNw/VW_UfIuOC6I/AAAAAAAAFko/d-Iut3BR_HE/s800/dawki-35346456.jpg" />
                        
                    </div>
                    <div className="content" style={{textAlign: "initial"}}>
                        <div className="post-title-box item-title">
                            <h2><Link to="#">{data.title}</Link></h2>
                        </div>
                    </div>

                        <div className="material-post-footer">
                            <div className="clear"></div>
                            <div className="clear"></div>
                        </div>

                    </div>

                    {renderFooter()}

                </div>
                </div>
                </div>

            </div>
    )
}

export default GalleryItem