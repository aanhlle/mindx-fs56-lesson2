import "./App.css";
import ProductList from "./components/SmartPhoneStore/ProductList";
import ProductDetail from "./components/SmartPhoneStore/ProductDetail";
import ProductCart from "./components/SmartPhoneStore/ProductCart";
import { PHONES } from "./Consts";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.state = {
            phoneID: 1,
            countItems: 0,
            addToCartPhoneID: 0,
        };
    }

    clickHandler(id) {
        this.setState({ phoneID: id });
    }

    addToCart(id) {
        console.log(id);
        this.setState((state, props) => ({
            countItems: state.countItems + 1,
        }));
    }

    render() {
        let { phoneID, countItems, addToCartPhoneID } = this.state;
        return (
            <>
                <div className="max-vw-100">
                    <button
                        className="btn btn-outline-dark position-relative top-0 end-0"
                        data-bs-toggle="modal"
                        data-bs-target="#cartModal"
                    >
                        <i className="fa fa-shopping-cart fa-lg d-inline mt-3 me-5"></i>
                        <span className="badge rounded-pill bg-danger">
                            {countItems}
                        </span>
                    </button>
                    <ProductCart addToCartPhoneID={addToCartPhoneID} />
                    <ProductList
                        PHONES={PHONES}
                        clickHandler={this.clickHandler}
                        addToCart={this.addToCart}
                    />
                    <ProductDetail PHONES={PHONES} phoneID={phoneID} />
                </div>
            </>
        );
    }
}

export default App;
