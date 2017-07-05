import React, { Component } from 'react'
import {Link} from 'react-router'

class Login extends Component {
    
    componentDidMount() {
        window.admin = true
        document.body.setAttribute('class','login-page')
    }
    
    toggleCheck(e) {
        let checkbox = e.target
        console.log('ftw')
        if(checkbox.checked)
            checkbox.removeAttribute('checked')
        else
            checkbox.setAttribute('checked','')
    }
    
    render() {
        
        /*
        Fix the checkbox
        and get the javascript there is in js/pages/examples/sign-in.js
        */
        
        return (
            <section className="login-page">
                 <div className="login-box">
                    <div className="logo">
                        <Link to="#">Admin<b>BSB</b></Link>
                        <small>Admin control panel</small>
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="sign_in" method="POST">
                                <div className="msg">Sign in</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">person</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="text" className="form-control" name="username" placeholder="Username" required autofocus />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="material-icons">lock</i>
                                    </span>
                                    <div className="form-line">
                                        <input type="password" className="form-control" name="password" placeholder="Password" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" onChange={this.toggleCheck} />
                                        <label for="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-xs-4">
                                        <button className="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                                    </div>
                                </div>
                                <div className="row m-t-15 m-b--20">
                                    <div className="col-xs-6">
                                        <Link to="#">Register Now!</Link>
                                    </div>
                                    <div className="col-xs-6 align-right">
                                        <Link to="#">Forgot Password?</Link>
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