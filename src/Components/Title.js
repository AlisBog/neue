import React, { Component } from 'react';


export default class Title extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-9 col-lg-10 mx-auto text-center text-title mt-5">
                    <h2 className="text-capitalize"><span className="text-blue">{this.props.name}</span>{' '}{this.props.title}</h2>
                </div>
            </div>
        )
    }
}

