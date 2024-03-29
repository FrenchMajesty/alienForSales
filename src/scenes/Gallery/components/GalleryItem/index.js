import React from 'react'
import { Link } from 'react-router'
import RoundActionButton from './components/RoundActionButton'

const GalleryItem = ({data, author, animation}) => {

    const renderFooter = () => {
        return (
            <div className="post-footer item-footer" style={{textAlign: "initial"}}>
                <div className="post-footer-line post-footer-line-1">
                    <span className="post-author vcard">By {author}</span>
                    <span className="post-comment-link">{data.quantity} left in stock!</span>
                    {/*<RoundActionButton icon={"attach_money"} title={`$${Number(data.price).toLocaleString()}`} />*/}
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
                    <span className="dte">{formatDate(data.date_posted)}</span>
                </span>
            </div>
        )
    }
    
    const formatDate = (date) => {
        const d = new Date(date)
        return d.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})
    }
    
    const anim = animation || "fadeInLeft"
    return (
         <div className="date-outer gallery-card">

                {renderHead()}

                <div className="date-posts gallery-item">
                <div className={"post-outer summarized wow "+anim}>
                <div className="post hentry" itemProp="blogPost" itemScope="itemscope" itemType="http://schema.org/BlogPosting">
                <div className="post-body entry-content" id="post-body-5393435426553883135" itemProp="description articleBody">

                     <div className="media-box image">
                        <div className="overlay-img"></div>
                        <Link to={"/gallery/"+data.id} className="post-url"></Link>
                        <img className="image" src={data.image} />
                        
                    </div>
                    <div className="content" style={{textAlign: "initial"}}>
                        <div className="post-title-box item-title">
                            <h2><Link to={"/gallery/"+data.id}>{data.title}</Link></h2>
                        </div>
                        <div className="post-meta"></div>
                        <div className="post-summary">
                            {data.description}
                        </div>
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