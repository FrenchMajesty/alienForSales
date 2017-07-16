import React from 'react'
import { Link } from 'react-router'
import { formatDate } from '~/services/Helper'

const BlogEntry = ({data, author}) => {

    
    const type = data.price ? 'gallery' : 'blog'
    
    const socialButtons = () => {
        return (
            <div className="social-share-circles">
            <Link to="#" title="Share on Facebook" className="sc-circle fb anim-1">   <i className="fa fa-facebook"></i> </Link>
            <Link to="#" title="Share on Google+" className="sc-circle gp anim-2">   <i className="fa fa-google-plus"></i> </Link>
            <Link to="#" className="sc-circle tw anim-3">   <i className="fa fa-twitter"></i> </Link>
            <Link to="#" title="Buy this piece" className="sc-circle em anim-4" style={{backgroudColor: "#5baf59"}}>   <i className="fa fa-shopping-cart"></i> </Link>
            </div>
        )
    }

    const renderHead = () => {
        return (
            <div className="date-header">
                <span className="out">
                    <i className="fa fa-fw fa-calendar"></i>
                    <span className="dte">{formatDate(data.date_posted)}</span>
                </span>
            </div>
        )
    }
    
    const renderFooter = () => {
        return(
            <div className="post-footer" style={{textAlign: "initial"}}>
                <div className="post-footer-line post-footer-line-1">
                    <span className="post-author vcard"> Posted by {author}</span>
                    <span className="post-comment-link">
                            {data.quantity &&
                                <Link to={type+"/"+data.id} className="comment-link"> {data.quantity} left in stock! </Link>}
                    </span>
                    <div className="post-share-buttons goog-inline-block"></div>
                </div>

                {type == 'gallery' &&
                <div className="post-footer-line post-footer-line-2">
                    <span className="post-labels">Labels:
                        {data.tags.split(',').map((tag, i) => {
                            const comma = (i != 0) ? ', ' : ''
                            return (<sect key={i}><i>{comma}</i><Link to="#" rel="tag">{tag}</Link></sect>)
                        })}
                    </span>
                </div>}
            </div>
        )
    }
    
    const summary = data.description || data.article
    // *Fix summary.length
        return (
            <div className="date-outer">

                {renderHead()}

                <div className="date-posts">
                <div className="post-outer summarized wow fadeInLeft">
                <div className="post hentry" itemProp="blogPost" itemScope="itemscope" itemType="http://schema.org/BlogPosting">
                <div className="post-body entry-content" id="post-body-5393435426553883135" itemProp="description articleBody">

                    {type == 'gallery' &&
                     <div className="media-box image">
                        <div className="overlay-img"></div>
                        <Link to={type+"/"+data.id} className="post-url"></Link>
                        <img className="image" src={data.image} />
                        {socialButtons()}
                    </div>}
                    <div className="content" style={{textAlign: "initial"}}>
                        <div className="post-title-box">
                            <h2>
                                <Link to={type+"/"+data.id}>{data.title}</Link>
                            </h2>
                        </div>
                        <div className="post-meta"></div>
                        <div className="post-summary">
                            {(10 >= 140 && (summary.slice(0,140)+'...')) ||
                              summary}
                        </div>
                        <div className="read-more">
                            <Link to={type+"/"+data.id}><span>Read More</span></Link>
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

export default BlogEntry
