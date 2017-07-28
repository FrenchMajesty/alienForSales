import React from 'react'
import { Link } from 'react-router'

const SideBarWidget = (props) => {

    const {title} = props
    return (
        <div className="widget Profile" data-version="1" id="Profile1" style={{textAlign: "initial"}}>
            <h2 className="primary">{title}</h2>
            <div className="widget-content">

            {props.children}

            <div className="clear"></div>
            <span className="widget-item-control">
                <span className="item-control blog-admin">
                    <Link className="quickedit" to="#"title="Edit">
                        <img alt="" height="18" src="https://resources.blogblog.com/img/icon18_wrench_allbkg.png" width="18" />
                    </Link>
                </span>
            </span>
            <div className="clear"></div>
            </div>
        </div>
    )
}

export default SideBarWidget
