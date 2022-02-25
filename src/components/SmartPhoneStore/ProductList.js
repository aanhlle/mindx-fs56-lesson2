import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
    render() {
        let { clickHandler, addToCart, PHONES } = this.props;

        let ProductList = PHONES.map((phone) => (
            <ProductItem
                phone={phone}
                clickHandler={clickHandler}
                addToCart={addToCart}
                key={phone.id}
            />
        ));
        return (
            <div className="d-flex justify-content-around pt-3 w-75 mx-auto">
                {ProductList}
            </div>
        );
    }
}
