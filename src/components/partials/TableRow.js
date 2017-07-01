import React from 'react'

const TableRow = (props) => {

    const { date, email, name, status } = props

    const getStatusClass = () => {
        switch (status) {
            case "client":
                return "label-success"

            case "known":
                return "label-warning"

            default:
                return "label-default"
        }
    }

        return(
            <tr>
                <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    <a href="#" className="user-link">{name}</a>
                    <span className="user-subhead">Admin</span>
                </td>
                <td>
                    {date}
                </td>
                <td className="text-center">
                <span className={"label " + getStatusClass()}>
                    {status}
                </span>
                </td>
                <td>
                    <a href="#">{email}</a>
                </td>
                <td style={{width: 20}}>
                    <a href="#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <a href="#" className="table-link danger">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </td>
            </tr>
        )
}

export default TableRow
