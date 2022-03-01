import "./App.css";
import ProductList from "./components/SmartPhoneStore/ProductList";
import ProductDetail from "./components/SmartPhoneStore/ProductDetail";
import ProductCart from "./components/SmartPhoneStore/ProductCart";
import { PHONES } from "./Consts";
import { Component } from "react";

//find phone if found return phone else phoneID
function findPhoneInCart(arr, phoneID) {
    let result = arr.findIndex((el) => el.id === phoneID);
    if (result === -1) {
        return PHONES.find((el) => el.id === phoneID);
    } else return phoneID;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.onPhoneRemove = this.onPhoneRemove.bind(this);
        this.onPhoneDelete = this.onPhoneDelete.bind(this);
        this.state = {
            phoneID: 1,
            countItems: 0,
            cart: [],
        };
    }

    clickHandler(id) {
        this.setState({ phoneID: id });
    }

    addToCart(id) {
        this.setState((state, props) => ({
            countItems: state.countItems + 1,
        }));
        let findPhoneResult = findPhoneInCart(this.state.cart, id);
        if (typeof findPhoneResult === "object") {
            findPhoneResult.amount = 1;
            this.setState((state, props) => ({
                cart: [...state.cart, findPhoneResult],
            }));
        } else {
            this.setState((state, props) => ({
                cart: state.cart.map((el) =>
                    el.id === findPhoneResult
                        ? { ...el, amount: el.amount + 1 }
                        : el
                ),
            }));
        }
    }

    onPhoneRemove(id) {
        this.setState((state) => {
            let { cart } = state;

            let rmvPhoneIdx = cart.findIndex((phone) => phone.id === id);
            if (cart[rmvPhoneIdx].amount > 1)
                return {
                    cart: cart.map((el, idx) => {
                        if (el.id === id) return { ...el, amount: --el.amount };
                        else return el;
                    }),
                    countItems: --state.countItems,
                };
            else {
                let clone = JSON.parse(JSON.stringify(cart));
                clone.splice(rmvPhoneIdx, 1);
                return {
                    cart: clone,
                    countItems: --state.countItems,
                };
            }
        });
    }

    onPhoneDelete(id) {
        this.setState((prev) => {
            let clone = JSON.parse(JSON.stringify(prev.cart));
            let rmvPhoneIdx = clone.findIndex((phone) => phone.id === id);
            console.log(rmvPhoneIdx);
            let rmvPhoneAmount = clone.splice(rmvPhoneIdx, 1)[0].amount;

            return {
                cart: clone,
                countItems: prev.countItems - rmvPhoneAmount,
            };
        });
    }
    render() {
        let { phoneID, countItems, cart } = this.state;
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
                    <ProductCart
                        cart={cart}
                        onPhoneAdd={this.addToCart}
                        onPhoneRemove={this.onPhoneRemove}
                        onPhoneDelete={this.onPhoneDelete}
                    />
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
