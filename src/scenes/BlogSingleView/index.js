import React, {Component} from 'react'
import PageWrapper from '~/components/Container/PageWrapper'
import ColumnContainer from '~/components/Container/ColumnContainer'
import ItemCard from '~/components/ItemCard'
import {loadBlog} from '~/services/api'

class BlogSingleView extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            data: {}
        }
    }
    
    componentWillMount() {
        const {params, history} = this.props
        
        loadBlog(params.id)
        .then(response => {
            if(response.data.error || !response.data.id)
                history.push(null, '/404')
            else
                this.setState({data: response.data})
        })
    }
    
    render() {
        const {author} = this.props.route
        const {data} = this.state
        return (
            <PageWrapper>
                <div className="main-outer">
                <div className="fauxborder-left main-fauxborder-left">
                <div className="region-inner main-inner">
                <div className="columns fauxcolumns" style={{padding: "0 5em"}}>
                <div className="columns-inner">

                <ColumnContainer type="center">
                    <div className="blog-posts hfeed">
                        <ItemCard data={data} author={author} animation="bounceInLeft" />
                    </div>
                    </ColumnContainer>

                </div>
                <div style={{clear: "both"}} />
                </div>
                </div>
                </div>
                </div>
            </PageWrapper>
        )
    }
}

export default BlogSingleView