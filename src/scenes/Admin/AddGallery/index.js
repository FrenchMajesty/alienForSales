import React, { Component } from 'react'
import { Link } from 'react-router'
import SideNavigation from '../components/SideNavigation'
import TopNavBar from '../components/TopNavBar'
import CardContainer from '../components/CardContainer'
import PageLoader from '../components/PageLoader'
import TextInput from '../components/Form/TextInput'
import TextArea from '../components/Form/TextArea'
import Button from '../components/Button'


class AddGallery extends Component {
    
    render() {
        
        const user = {
            email: "verdi.kap@gmail.com",
            name: "Verdi Kapuku"
        }
        
        return (
                <section className="content">
                    <CardContainer title="Upload an Item" size="col-lg-12" smallPrint="Must use dropzonejs.com">
                            <form action="/" id="frmFileUpload" className="dropzone" method="post" enctype="multipart/form-data">
                                <div className="dz-message">
                                    <div className="drag-icon-cph">
                                        <i className="material-icons">touch_app</i>
                                    </div>
                                    <h3>Drop files here or click to upload.</h3>
                                    <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em>
                                </div>
                                <div className="fallback">
                                    <input name="file" type="file" multiple />
                                </div>
                            </form>
                        <br/>
                            <div className="row clearfix">
                                <TextInput
                                    placeholder="Title"
                                    size="col-md-4"
                                    icon="text_fields"
                                    name="title"
                                />
                                <TextInput
                                    placeholder="Price"
                                    size="col-md-4"
                                    icon="attach_money"
                                    name="price"
                                />
                                <TextInput
                                    placeholder="Quantity in stock"
                                    size="col-md-4"
                                    icon="equalizer"
                                    name="quantity"
                                />
                            </div>
                            <div className="row">
                                <TextArea
                                    autoGrow={true}
                                    name="Description"
                                />
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                 <div className="form-group demo-tagsinput-area">
                                    <div className="form-line">
                                        <input type="text" className="form-control" data-role="tagsinput" value="Amsterdam,Washington,Sydney,Beijing,Cairo" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        <div class="row">
                            <div className="text-center">
                                <Button className="btn-success btn-lg" title="Add" icon="add_box" />
                            </div>
                        </div>
                    </CardContainer>  
                </section>
        )
    }
}


export default AddGallery