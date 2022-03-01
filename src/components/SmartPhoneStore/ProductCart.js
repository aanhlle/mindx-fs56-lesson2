import React, { Component } from "react";

export default class ProductCart extends Component {
    render() {
        let { cart, onPhoneAdd, onPhoneRemove, onPhoneDelete } = this.props;

        let totalPrice = 0;
        cart.forEach(
            (phone) => (totalPrice += phone.amount * parseInt(phone.price))
        );

        return (
            <div
                className="modal fade"
                id="cartModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Giỏ hàng
                            </h5>
                        </div>
                        <div className="modal-body">
                            <table className="table table-image">
                                <thead>
                                    <tr>
                                        <th scope="col" />
                                        <th scope="col">Mã sản phẩm</th>

                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Đơn giá</th>
                                        <th scope="col">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((phone) => (
                                        <tr key={phone.id}>
                                            <td className="w-25">
                                                <img
                                                    src={phone.img}
                                                    className="img-fluid img-thumbnail"
                                                    alt="Sheep"
                                                />
                                            </td>
                                            <td>{phone.id}</td>
                                            <td>{phone.name}</td>

                                            <td>
                                                <span
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() => {
                                                        onPhoneRemove(phone.id);
                                                    }}
                                                >
                                                    -
                                                </span>
                                                {phone.amount}
                                                <span
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => {
                                                        onPhoneAdd(phone.id);
                                                    }}
                                                >
                                                    +
                                                </span>
                                            </td>

                                            <td>{parseInt(phone.price)}</td>
                                            <td>
                                                {phone.amount *
                                                    parseInt(phone.price)}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        onPhoneDelete(phone.id)
                                                    }
                                                >
                                                    <i className="fa fa-times" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-end">
                                <h5>
                                    Total:{" "}
                                    <span className="price text-success">
                                        {totalPrice}
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="modal-footer border-top-0 d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-success">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
