import React, {Component} from 'react'
import InfoBox from './components/InfoBox'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import Table from '../components/Table'
import CardContainer from '../components/CardContainer'
import PageLoader from '../components/PageLoader'
import MenuItem from 'material-ui/MenuItem'
import Card from 'material-ui/Card'
import {cyan500, pink500} from 'material-ui/styles/colors'
import {formatDate} from '~/services/Helper'

class Dashboard extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.renderTable = this.renderTable.bind(this)
        this.loadData = this.loadData.bind(this)
        this.tableDropdown = this.tableDropdown.bind(this)
    }
    
    getInitialState() {
        return {
            popular: []
        }
    }
    
    componentWillMount() {
        this.loadData()    
    }
    
    componentWillReceiveProps() {
        this.loadData()
    }
    
    loadData() {
       /*loadBestSellers(10) // -- does not exist yet
        .then(response => this.setState({popular: response.data}))
        
        // load all data for statbox.... */
    }
    
    tableDropdown() {
        return <MenuItem primaryText="Refresh" onTouchTap={this.reload} />
    }
    
    reload() {
        this.loadData()
    }
    
    renderTable() {
        const {popular} = this.state
        
        return(popular.map((item, i) => {
            if(i == popular.length-1) return // Skip last entry
            
            return (
                <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{Number(item.price).toLocaleString()}</td>
                    <td>{formatDate(item.date_posted)}</td>
                    <td>00</td>
                </tr>
            )   
        }))
    }
    
    render() {
        return (
    <section className="content">
        <div className="container-fluid">
            <div className="block-header">
                <h2>DASHBOARD</h2>
            </div>

            
            <div className="row clearfix">
                
                <InfoBox
                    type="info-box-4"
                    title="Product Inventory"
                    color="bg-pink"
                    icon="playlist_add_check"
                    value="14"
                />
                
                <InfoBox
                    title="Online revenue"
                    color="bg-light-green"
                    icon="attach_money"
                    value="$200.50"
                />
                
                <InfoBox
                    title="Newsletter fan"
                    color="bg-cyan"
                    icon="people"
                    value="1287"
                />
                
                <InfoBox
                    title="New Visitors"
                    color="bg-orange"
                    icon="public"
                    value="99"
                />
            </div>
            <div className="row clearfix">
                
                <div className="col-lg-4">
                <Card style={{backgroundColor: pink500}}>
                    <div className="card" style={{boxShadow: 'none', backgroundColor: 'inherit'}}>
                        <div className="body bg-pink">
                            <div className="sparkline" data-type="line" data-spot-radius="4" data-highlight-spot-color="rgb(233, 30, 99)" data-highlight-line-color="#fff"
                                 data-min-spot-color="rgb(255,255,255)" data-max-spot-color="rgb(255,255,255)" data-spot-color="rgb(255,255,255)"
                                 data-offset="90" data-width="100%" data-height="92px" data-line-width="2" data-line-color="rgba(255,255,255,0.7)"
                                 data-fill-color="rgba(0, 188, 212, 0)">
                                12,10,9,6,5,6,10,5,7,5,12,13,7,12,11
                            </div>
                            <ul className="dashboard-stat-list">
                                <li>
                                    TODAY
                                    <span className="pull-right"><b>1 200</b> <small>USERS</small></span>
                                </li>
                                <li>
                                    YESTERDAY
                                    <span className="pull-right"><b>3 872</b> <small>USERS</small></span>
                                </li>
                                <li>
                                    LAST WEEK
                                    <span className="pull-right"><b>26 582</b> <small>USERS</small></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
                </div>
                
                <div className="col-lg-4">
                <Card style={{backgroundColor: cyan500}}>
                    <div className="card" style={{boxShadow: 'none', backgroundColor: 'inherit'}}>
                        <div className="body bg-cyan">
                            <div className="m-b--35 font-bold">LATEST SOCIAL TRENDS</div>
                            <ul className="dashboard-stat-list">
                                <li>
                                    #socialtrends
                                    <span className="pull-right">
                                        <i className="material-icons">trending_up</i>
                                    </span>
                                </li>
                                <li>
                                    #materialdesign
                                    <span className="pull-right">
                                        <i className="material-icons">trending_up</i>
                                    </span>
                                </li>
                                <li>#adminbsb</li>
                                <li>#freeadmintemplate</li>
                                <li>#bootstraptemplate</li>
                                <li>
                                    #freehtmltemplate
                                    <span className="pull-right">
                                        <i className="material-icons">trending_up</i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
                </div>

                <CardContainer title="Browser usage" size="col-lg-4">
                    <div id="donut_chart" className="dashboard-donut-chart"></div>
                </CardContainer>

            </div>

            {/*<div className="row clearfix">
                <Table size="col-lg-8" title="Best sellers" dropdown={this.tableDropdown()}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Posted on</th>
                            <th>Total sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </Table>
            </div>*/}
        </div>
    </section>
        )
    }
}


export default Dashboard