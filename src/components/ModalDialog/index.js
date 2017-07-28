import React, {Component} from 'react'
import {ModalContainer, ModalDialog as Dialog} from 'react-modal-dialog'


class ModalDialog extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            visible: false
        }
        
        this.handleClose = this.handleClose.bind(this)
    }
    
    componentWillMount() {
        this.setState({visible: this.props.show})
    }
    
    componentWillReceiveProps(newProps) {
        this.setState({visible: newProps.show})
    }
    
    handleClose(e) {
        this.setState({visible: false})
        this.props.onClose()
    }
    
    render() {
        const {children} = this.props
        const {visible} = this.state
        return (
            <div>
            {visible &&
                <ModalContainer onClose={this.handleClose}>
                  <Dialog onClose={this.handleClose} style={{borderRadius: '4px'}}>
                    {children}
                  </Dialog>
                </ModalContainer>}
            </div>
        )
    }
}


export default ModalDialog