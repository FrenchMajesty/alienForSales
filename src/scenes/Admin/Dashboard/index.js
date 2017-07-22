import React, { Component } from 'react'
import { Link } from 'react-router'
import InfoBox from './components/InfoBox'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import Table from '../components/Table'
import CardContainer from '../components/CardContainer'
import PageLoader from '../components/PageLoader'
import MenuItem from 'material-ui/MenuItem'
import Card from 'material-ui/Card'
import {cyan500, pink500} from 'material-ui/styles/colors'

class Dashboard extends Component {
    
    constructor(props) {
        super(props)
        
        this.tableDropdown = this.tableDropdown.bind(this)
    }
    
    tableDropdown() {
        return <MenuItem primaryText="Refresh" onTouchTap={this.reload} />
    }
    
    reload() {
        console.log('refresh')
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

            <div className="row clearfix">
                
                <Table size="col-lg-8" title="Best sellers" dropdown={this.tableDropdown()}>
                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Posted on</th>
                                            <th>Total sales</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Task A</td>
                                            <td><span className="label bg-green">Doing</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" style={{width: "62%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Task B</td>
                                            <td><span className="label bg-blue">To Do</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-blue" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Task C</td>
                                            <td><span className="label bg-light-blue">On Hold</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-light-blue" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: "72%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Task D</td>
                                            <td><span className="label bg-orange">Wait Approvel</span></td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-orange" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Task E</td>
                                            <td>
                                                <span className="label bg-red">Suspended</span>
                                            </td>
                                            <td>John Doe</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar bg-red" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{width: "87%"}}></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                </Table>
            </div>
        </div>
    </section>
        )
    }
}


export default Dashboard