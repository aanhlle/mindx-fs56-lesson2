import React, { Component } from "react";
import { PHONES } from "../../Consts";

export default class ProductDetail extends Component {
    render() {
        let { phoneID } = this.props;
        let phone = PHONES[phoneID - 1];
        return (
            <div className="d-flex flex-row justify-content-center pt-3">
                <div className="text-center">
                    <h3>{phone.name}</h3>
                    <img src={phone.img} className="w-50" alt="" />
                </div>
                <div>
                    <h3>Thông số kỹ thuật</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{phone.info.screen}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{phone.info.os}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{phone.info.frontCamera}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{phone.info.backCamera}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{phone.ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{phone.rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
