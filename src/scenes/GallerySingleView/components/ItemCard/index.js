import React from 'react'
import { Link } from 'react-router'
import BasicButton from '~/components/Button/BasicButton'
import { formatDate } from '~/services/Helper'

const ItemCard = (props) => {

    const socialButtons = () => {
        return (
            <div className="social-share-circles">
            <Link to="#" title="Share on Facebook" className="sc-circle fb anim-1">   <i className="fa fa-facebook"></i> </Link>
            <Link to="#" title="Share on Google+" className="sc-circle gp anim-2">   <i className="fa fa-google-plus"></i> </Link>
            <Link to="#" className="sc-circle tw anim-3">   <i className="fa fa-twitter"></i> </Link>
            </div>
        )
    }

    const renderHead = () => {
        const {data} = props
        return (
            <div className="date-header single-view-date">
                <span className="out">
                    <i className="fa fa-fw fa-calendar"></i>
                    <span className="dte">{formatDate(data.date)}</span>
                </span>
            </div>
        )
    }

    const renderFooter = () => {
        const {data, author} = props
        
        return(
            <div className="post-footer" style={{textAlign: "initial"}}>
                <div className="post-footer-line post-footer-line-1">
                    <span className="post-author vcard">By {author}</span>
                    <span className="post-comment-link">
                            {data.stock > 0 &&
                                <Link to="#buy" className="comment-link"> {data.stock} left in stock! </Link>}
                    </span>
                    <div className="post-share-buttons goog-inline-block"></div>
                </div>

                <div className="post-footer-line post-footer-line-2">
                    <span className="post-labels">Labels:
                        {data.tags.map((tag, i) => {
                            const comma = (i != 0) ? ', ' : ''
                            return (<sect key={i}><i>{comma}</i><Link to="#" rel="tag">{tag}</Link></sect>)
                        })}
                    </span>
                </div>
            </div>
        )
    }

        const {data} = props
        const animation = props.animation || "fadeInLeft"
        
        return (
            <div className="date-outer">

                {renderHead()}

                <div className="date-posts">
                <div className={"post-outer summarized wow "+animation}>
                <div className="post hentry" itemProp="blogPost" itemScope="itemscope" itemType="http://schema.org/BlogPosting">
                <div className="post-body entry-content" id="post-body-5393435426553883135" itemProp="description articleBody">

                     <div className="media-box image">
                        <div className="overlay-img"></div>
                        <Link to="#" className="post-url"></Link>
                        <img className="image" src="http://4.bp.blogspot.com/-TPrTQfHEaNw/VW_UfIuOC6I/AAAAAAAAFko/d-Iut3BR_HE/s800/dawki-35346456.jpg" />
                        {socialButtons()}
                    </div>
                    <div className="content" style={{textAlign: "initial"}}>
                        <div className="post-title-box">
                            <h2>
                                <Link to="#">{data.title}</Link>
                            </h2>
                        </div>
                        <div className="post-meta"></div>
                        <div className="post-summary">
                            {data.summary}
                        </div><br/>
                        <center><BasicButton className={!data.stock ? "disabled": ""} target="#" title="Buy now" color="#f15a24"/></center>
                       
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

export default ItemCard
