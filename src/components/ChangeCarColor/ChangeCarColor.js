import React from "react";
class ChangeCarColor extends React.Component {
    state = {
        carURL: "black-car.png",
    };
    clickHandler = (e) => {
        let color = e.target.value;
        if (color === "white") this.setState("white-car.png");
        else if (color === "red") this.setState("red-car.png");
        else this.setState("black-car.png");
    };
    render() {
        const url = `img/${this.state.carURL}`;
        return (
            <div className="car-container">
                <p>Please choose your car's color</p>
                <div className="car-images"></div>
                <img src={url} alt="car" />
                <p>Change color</p>
                <button onClick={this.clickHandler} value="red">
                    Red color
                </button>
                <button onClick={this.clickHandler} value="black">
                    Black color
                </button>
                <button onClick={this.clickHandler} value="white">
                    White color
                </button>
            </div>
        );
    }
}

export default ChangeCarColor;
