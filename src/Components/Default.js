import React, { Component } from 'react';
import Navbar from './Navbar';
import error from '../img/error.png';

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-10 my-5 mx-auto text-capitalize text-center">
                            <h1 style={{marginTop: '55px'}}>oops!</h1>
                            <img style={{width: '80px', marginTop: '55px'}} src={error} alt="error"></img>
                            <h6 style={{marginTop: '15px'}}>page not found</h6>
                            <h5 style={{marginTop: '55px'}}>it seem's the page you were looking for do not exist anymore :</h5>
                            <h6 className="">URL<span className="text-danger">{this.props.location.pathname}</span></h6>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
