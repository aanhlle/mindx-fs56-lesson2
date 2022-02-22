import "./App.css";
import ProductList from "./components/SmartPhoneStore/ProductList";
import ProductDetail from "./components/SmartPhoneStore/ProductDetail";
import { PHONES } from "./Consts";
import { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            phoneID: 1,
        };
    }

    clickHandler(id) {
        this.setState({ phoneID: id });
    }
    render() {
        let { phoneID } = this.state;
        return (
            <>
                <div className="max-vw-100">
                    <ProductList
                        PHONES={PHONES}
                        clickHandler={this.clickHandler}
                    />
                    <ProductDetail PHONES={PHONES} phoneID={phoneID} />
                </div>
            </>
        );
    }
}

export default App;
