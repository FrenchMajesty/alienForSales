import React, { Component } from 'react'
import { Link } from 'react-router'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import MenuItem from 'material-ui/MenuItem'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import Table from '../components/Table'
import PageLoader from '../components/PageLoader'
import { formatPreciseDate } from '~/services/Helper'
import { loadGalleryFeed, updateGalleryItem, deleteGalleryItem, saveToLog } from '~/services/api'

class EditGallery extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = this.getInitialState()
        
        this.deleteItem = this.deleteItem.bind(this)
        this.editItemDetail = this.editItemDetail.bind(this)
        this.loadGallery = this.loadGallery.bind(this)
        this.renderTable = this.renderTable.bind(this)
    }
    
    getInitialState() {
        return {
            gallery: []
        }    
    }
    
    componentWillMount() {
        this.loadGallery()
    }
    
    componentWillReceiveProps() {
        this.loadGallery()
    }
    
    loadGallery() {
        loadGalleryFeed(0,999) // load all
        .then(response => this.setState({gallery: response.data}))
    }
    
    tableDropdown() {
        return <MenuItem onTouchTap={this.loadGallery} primaryText="Refresh" />
    }
    
    onItemKeyPress(i, e) {
        let {gallery} = this.state

        if(e.key == 'Enter') {
            updateGalleryItem(gallery[i])
            .then(response => {
               if(response.data === true) {
                    alert('Item successfully updated!')   
                    saveToLog(`Gallery item '${gallery[i].title}' was updated`, this.props.user)
               }else
                   alert('An unknown error occurred while attempting to update this item.')
            })
            e.target.blur()
        }
    }
    
    editItemDetail(i, e) {
        let {gallery} = this.state
        const {name, value} = e.target

        gallery[i][name] = value
        console.log(gallery[i])
        this.setState({gallery})
    }
    
    deleteItem(i) {
         if(!confirm('Are you sure you want to delete this item? This action cannot be reverted.')) return
         
        const {gallery} = this.state
        
        deleteGalleryItem(gallery[i].id).then(response => {
            if(response.data === true) {
                this.setState(this.getInitialState())
                this.setState({gallery: gallery.filter((_, idx) => idx !== i)})
                saveToLog(`Gallery item '${gallery[i].title}' was deleted`, this.props.user)
            }else if(response.data.error) {
                alert('Error: ' + response.data.error)
            }
        })
    }
    
    renderTable() {
        const {gallery} = this.state
        
        return (gallery.map((item, i) => {
            if(i == gallery.length-1) return
            return (<tr key={i}>
                        <td>
                            <Link className="thumbnail">
                                        <img src={item.image} className="img-responsive" />
                            </Link>
                        </td>    
                        <td>
                            <input type="text" name="title" value={item.title}
                                onChange={(e)=> {this.editItemDetail(i, e)}} 
                                onKeyPress={(e)=> {this.onItemKeyPress(i, e)}}
                            />
                        </td>    
                        <td>
                            <input type="text" name="price" value={item.price}
                                onChange={(e)=> {this.editItemDetail(i, e)}} 
                                onKeyPress={(e)=> {this.onItemKeyPress(i, e)}}
                            />
                        </td>
                        <td>
                            <input type="text" name="quantity" value={item.quantity}
                                onChange={(e)=> {this.editItemDetail(i, e)}} 
                                onKeyPress={(e)=> {this.onItemKeyPress(i, e)}}
                            />
                        </td>
                        <td>{formatPreciseDate(item.date_posted)}</td>
                        <td>
                            <IconButton onTouchTap={() => { this.deleteItem(i) }}>
                                <FontIcon className="material-icons">delete_forever</FontIcon>
                            </IconButton>
                        </td>
                    </tr>)
        }))
    }
    render() {
        const {gallery} = this.state

        return (
             <section className="content">
                <div className="container-fluid">
                    
                    <Table title="Gallery" size="col-lg-12" style="table-hover" dropdown={this.tableDropdown()}>
                                <thead>
                                    <tr>
                                        <th style={{width: '25%'}}>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>In Stock</th>
                                        <th>Date added</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {(gallery.length > 0 && this.renderTable()) ||
                                <p className="center-text">Gallery is currently empty. Please add items to show here.</p>}
                                </tbody>
                    </Table>
                </div>
            </section>
        )
    }
}


export default EditGallery
