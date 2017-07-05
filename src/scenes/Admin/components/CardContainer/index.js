import React from 'react'
import { Link } from 'react-router'

const CardContainer = (props) => {
    
    const {title, size, smallPrint} = props
    return (
        <div className={"col-xs-12 col-sm-12 col-md-4 col-lg-12 "+size}>
                    <div className="card">
                        <div className="header">
                            <h2>{title.toUpperCase()}</h2>
                            {smallPrint &&
                                <small>{smallPrint}</small>}
                            <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <Link to="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        <i className="material-icons">more_vert</i>
                                    </Link>
                                    <ul className="dropdown-menu pull-right">
                                        <li><Link to="javascript:void(0);">Action</Link></li>
                                        <li><Link to="javascript:void(0);">Another action</Link></li>
                                        <li><Link to="javascript:void(0);">Something else here</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            {props.children}
                        </div>
                    </div>
                </div>
    )
}

export default CardContainer