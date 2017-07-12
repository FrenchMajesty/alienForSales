import React, { Component } from 'react'
import {Link} from 'react-router'

class Login extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
            rememberMe: false
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        window.admin = true
        document.body.setAttribute('class','login-page')
    }
    
    handleSubmit(e) {
        e.preventDefault()
        
        const {username, password, rememberMe} = this.state
        
        // API CALL
        console.log('API CALL: Login')
    }
    
    render() {
        
        /*
        and get the javascript there is in js/pages/examples/sign-in.js
        */
        console.log(this.state)
        const {username, password, rememberMe} = this.state
        return (
            <section className="login-page">
                 <div className="login-box">
                    <div className="logo">
                        <Link to="#">Admin<b>CPB</b></Link>
                        <small>Admin control panel</small>
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="sign_in" method="POST" onSubmit={this.handleSubmit}>
                                <div className="msg">Sign in</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">person</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => { this.setState({username: e.target.value}) }}
                                            required
                                            autofocus />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">lock</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => this.setState({password: e.target.value})}
                                            required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <input type="checkbox"
                                            name="rememberme" 
                                            id="rememberme" 
                                            className="filled-in chk-col-pink" 
                                            checked={rememberMe} 
                                            onChange={(e) => this.setState({rememberMe: !rememberMe})}
                                        />
                                        <label htmlFor="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-xs-4">
                                        <button className="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                                    </div>
                                </div>
                                <div className="row m-t-15 m-b--20">
                                    <div className="col-xs-6 align-right">
                                        <Link to="/admin/reset">Forgot Password?</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Login