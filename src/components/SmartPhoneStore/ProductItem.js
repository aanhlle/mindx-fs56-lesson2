import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        let { phone, clickHandler } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img
                    src={phone.img}
                    className="card-img-top w-50 h-75 mx-auto"
                    alt=""
                />
                <div className="card-body">
                    <h5 className="card-title">{phone.name}</h5>
                    <p className="card-text">
                        Sản phẩm chất nhất như nước cất!
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => clickHandler(phone.id)}
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
        );
    }
}
