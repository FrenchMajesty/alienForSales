import React from 'react'
import {Link} from 'react-router'
import FooterSocials from '~/components/Container/FooterSocials'
import RoundSocialButtons from '~/components/RoundSocialButtons'
import {formatDate} from '~/services/Helper'

const BlogEntry = ({data, author}) => {

    
    const type = data.price ? 'gallery' : 'blog'

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
                    <FooterSocials />
                </div>

                {type == 'gallery' &&
                <div className="post-footer-line post-footer-line-2">
                    <span className="post-labels">Labels:
                        {data.tags.split(',').map((tag, i) => {
                            const comma = (i != 0) ? ', ' : ''
                            return (<sect key={i}><i>{comma}</i><Link to={`/${type}#${tag}`} rel="tag">{tag}</Link></sect>)
                        })}
                    </span>
                </div>}
            </div>
        )
    }
    
    let summary = data.description || data.article
    if(summary.length >= 140) summary = summary.slice(0,140)+'...'
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
                        <RoundSocialButtons />
                    </div>}
                    <div className="content" style={{textAlign: "initial"}}>
                        <div className="post-title-box">
                            <h2>
                                <Link to={type+"/"+data.id}>{data.title}</Link>
                            </h2>
                        </div>
                        <div className="post-meta"></div>
                        <div className="post-summary" dangerouslySetInnerHTML={{__html: summary}}>
                        </div>
                        <div className="read-more">
                            <Link to={type+"/"+data.id}><span>Read More</span></Link>
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

export default BlogEntry
