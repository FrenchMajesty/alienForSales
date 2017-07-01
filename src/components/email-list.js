import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmails } from '../actions/index';
import { Link } from 'react-router';
import TableRow from './partials/TableRow'

class EmailList extends Component {

    componentWillMount() {
        const { payload } = this.props.fetchEmails()
        this.setState({
            emails : payload
        })
    }

    renderList(entry) {
            return (
                <TableRow
                    date={entry.date}
                    email={entry.email}
                    name={entry.name}
                    status={entry.status}
                />
            )
    }

    render() {
        const { emails } = this.state

        return(
            <div className="container">
            <div className="row">
            	<div className="col-lg-12">
            		<div className="main-box clearfix">
            			<div className="table-responsive">
            				<table className="table user-list">
            					<thead>
            						<tr>
            							<th><span>User</span></th>
            							<th><span>Created</span></th>
            							<th className="text-center"><span>Status</span></th>
            							<th><span>Email</span></th>
            							<th>&nbsp;</th>
            						</tr>
            					</thead>
            					<tbody>

                                {emails.map(this.renderList)}

            					</tbody>
            				</table>
            			</div>
            			<ul className="pagination pull-right">
            				<li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
            				<li><a href="#">1</a></li>
            				<li><a href="#">2</a></li>
            				<li><a href="#">3</a></li>
            				<li><a href="#">4</a></li>
            				<li><a href="#">5</a></li>
            				<li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
            			</ul>
            		</div>
            	</div>
            </div>
            </div>
        );
    }
}


export default connect(null, { fetchEmails })(EmailList);
