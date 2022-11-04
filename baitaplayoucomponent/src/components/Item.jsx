import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="col-lg-3 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                    <div className="card-header p-5 text-center ">
                        500 X 325
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0 mt-4">
                        <h2 className="fs-4 fw-bold">Card title</h2>
                        <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nobis qui, </p>
                        <a className="btn btn-primary mt-5 " href="#!">Find Out More!</a>
                    </div>
                </div>
            </div>

        )
    }
}
