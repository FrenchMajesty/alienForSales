import React from 'react'
import { Link } from 'react-router'

const Footer = (props) => {

    const renderLabels = () => {
        const {tags} = props

        if(tags.length == 0){
            return <p>No label has been attributed to any post.</p>
        }else {
            return(tags.map((tag, i) => {
                return(<li key={i}><Link to="#" dir="ltr">{tag}</Link></li>)
            }))
        }
    }

    const renderFeed = () => {
        const {posts} = props

        if(posts.length == 0) {
            return <p>There are no posts on the site to show just yet.</p>
        }else {
            return(posts.map((post, i) => {
                return(<li key={i}>
                        <span className="item-title">
                        <Link to="#" target="_self">{post.title}</Link>
                        </span>
                        <span className="item-date">&nbsp;-&nbsp;{post.date}</span>
                    </li>)
            }))
        }
    }

    return (
        <footer>
            <div className="footer-outer">
            <div className="fauxborder-left footer-fauxborder-left">
            <div className="fauxborder-right footer-fauxborder-right"></div>
            <div className="region-inner footer-inner">
            <div className="foot no-items section" id="footer-1"></div>
                <table border="0" cellPadding="0" cellSpacing="0" className="section-columns columns-2"><tbody><tr>
                <td className="first columns-cell">
                <div className="foot section" id="footer-2-1"><div className="widget Feed" data-version="1" id="Feed1">

                <h2>Blog Feeds</h2>
                    <div className="widget-content" id="Feed1_feedItemListDisplay">
                    <ul>
                        {renderFeed()}
                    </ul>
                    </div>
                <div className="clear"></div>
                </div></div>
                </td>
                <td className="columns-cell">
                <div className="foot section" id="footer-2-2"><div className="widget Label" data-version="1" id="Label2">
                <h2>Labels</h2>
                    <div className="widget-content list-label-widget-content">
                    <ul>
                        {renderLabels()}
                    </ul>
                    <div className="clear"></div>
                    </div>
                </div></div>
                </td>
                </tr></tbody></table>

            <div className="foot section" id="footer-3"><div className="widget Attribution" data-version="1" id="Attribution1">
                <div className="widget-content" style={{textAlign: "center"}}>
                    Copyright © {new Date().getFullYear()} All rights reserved.
                </div>
                <div className="clear"></div>
            </div></div>
            </div>
            </div>
            </div>
            <div className="mt-attr">
                <div className="inner-container">
                    <p className="mt-attr-text">Website designed and built by <Link to="https://www.design-by-verdi.com" target="_blank" title="Website developed by Verdi Software Developement">Verdi Co.</Link></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
