import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
    render() {
        let { clickHandler, PHONES } = this.props;

        let ProductList = PHONES.map((phone) => (
            <ProductItem
                phone={phone}
                clickHandler={clickHandler}
                key={phone.id}
            />
        ));
        return (
            <div className="d-flex justify-content-around pt-3 w-75 mx-auto">
                {ProductList}

                <i
                    className="fa fa-shopping-cart fa-lg m-3"
                    onClick={() => {
                        console.log("cart!");
                    }}
                ></i>
            </div>
        );
    }
}
