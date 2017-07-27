import React, { Component } from 'react'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextInput from '../components/Form/TextInput'
import {Card, CardText} from 'material-ui/Card'
import {displayErrors} from '~/services/Helper'
import {postLogin, sendResetEmail} from '~/services/api'

class Login extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            current: 'login',
            email: '',
            username: '',
            password: '',
            error: []
        }
        
        this.handleResetSubmit = this.handleResetSubmit.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.showResetter = this.showResetter.bind(this)
        this.showLogin = this.showLogin.bind(this)
    }
    
    componentDidMount() {
        window.admin = true
        document.body.setAttribute('class','login-page')
    }
    
    showLogin() {
        this.setState({current: 'login'})
    }
    
    showResetter() {
        this.setState({current: 'reset'})
    }
    
    onInputChange(e) {
        const {name, value} = e.target
        this.setState({[name]: value, error: []})
    }
    
    handleResetSubmit(e) {
        e.preventDefault()
        
        sendResetEmail(this.state.email)
        .then(response => {
            if(!response.data)
                alert('No user associated with the given email exist.')
            else if(response.data.error)
                alert(response.data.error)
            else
                alert('Email recovery successfully sent! Please check your mailbox.')
        })
    }
    
    handleLoginSubmit(e) {
        e.preventDefault()
        
        const {username, password, rememberMe} = this.state
        let error =[]
        
        if(!username || !password)
            error.push('Please fill in all required fields.')
            
        if(error.length == 0) {
        
            const formData = {
                username: username,
                password: password
            }
            
            postLogin(formData)
            .then(response => {
                if(!response.data)
                    this.setState({error: ['Incorrect username or password.']})
                else
                    this.props.history.pushState(null, '/admin/')
            })
        }else {
            this.setState({error})
        }
    }
    
    render() {
        
        const {current, email, username, password, error} = this.state
        return (
            <section className="login-page">
                 <div className="login-box">
                    <div className="logo">
                        <Link to="#">Admin<b>CPB</b></Link>
                        <small>Admin control panel</small>
                    </div>
                     { current == 'login' &&
                         <Card className="card wow fadeInLeft" style={{paddingBottom: '1em'}}>
                        <CardText>
                            <form id="sign_in" method="POST" onSubmit={this.handleLoginSubmit}>
                                 {(error.length > 0 &&
                                <div className="alert alert-danger">{displayErrors(error)}</div>)
                                || <div className="msg">Sign in</div>}
                                    <TextInput
                                        placeholder="Username"
                                        icon="person"
                                        name="username"
                                        value={username}
                                        onChange={this.onInputChange}
                                        required={true}
                                        autoFocus={true}
                                    />
                                    <TextInput
                                        placeholder="Password"
                                        icon="lock"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={this.onInputChange}
                                        required={true}
                                    />
                                <div className="row">
                                    <div className="col-xs-4 col-md-offset-8">
                                        <RaisedButton label="Sign in" secondary={true} type="submit" />
                                    </div>
                                </div>
                                <div className="row m-t-35 m-b--20">
                                    <div className="col-xs-6 align-right">
                                        <Link onTouchTap={this.showResetter} style={{cursor: 'pointer'}}>Forgot Password?</Link>
                                    </div>
                                </div>
                            </form>
                        </CardText>
                    </Card>}
                     
                     {current == 'reset' &&
                        <Card className="card wow fadeInRight" style={{paddingBottom: '1em'}}>
                            <CardText>
                                <form onSubmit={this.handleResetSubmit}>
                    <div className="msg">
                        Enter your email address that you used to register. We'll send you an email with your username and a
                        link to reset your password.
                    </div>
                    <TextInput
                        placeholder="Email"
                        icon="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.onInputChange}
                        required={true}
                    />

                    <RaisedButton label="Reset my password" secondary={true} style={{width: '100%'}} type="submit" />
                                    
                    <div className="row m-t-20 m-b--5 align-center">
                        <FlatButton label="Sign in!" primary={true} onTouchTap={this.showLogin} />
                    </div>
                </form>
                            </CardText>
                        </Card>}
                </div>
            </section>
        )
    }
}


export default Login