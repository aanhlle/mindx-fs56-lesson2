import React, { Component } from "react";

export default class ProductItem extends Component {
    handleClick() {
        this.props.clickHandler(this.props.phone.id);
    }

    render() {
        let { phone, clickHandler, addToCart } = this.props;
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
                    <div className="d-flex justify-content-around">
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={this.handleClick.bind(this).bind(this)}
                        >
                            Xem chi tiết
                        </button>
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={() => addToCart(phone.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
