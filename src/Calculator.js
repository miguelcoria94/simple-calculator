import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            num1: "",
            num2: ""
        }
    }

    handleFirstNum = e => {
        // console.log(e);
        const num1 = parseInt(e.target.value, 10);
        this.setState({num1})
    }
    handleSecondNum = e => {
        // console.log(e);
        const num2 = parseInt(e.target.value, 10);
        this.setState({ num2 });
    }

    add = () => {
        const result = this.state.num1 + this.state.num2
        this.setState({result})
    }
    subtract = () => {
        const result = this.state.num1 - this.state.num2
        this.setState({result})
    }
    divide = () => {
        const result = this.state.num1 / this.state.num2
        this.setState({result})
    }
    multiply = () => {
        const result = this.state.num1 * this.state.num2
        this.setState({result})
    }
    clear = () => {
        this.setState({
            result: 0,
            num1: "",
            num2: ""})
    }

    render() {
        return (
            <div>
                <h1>Result:{this.state.result}</h1>
                <input onChange={this.handleFirstNum} type='number' placeholder='first number' value={this.state.num1} />
                <input onChange={this.handleSecondNum} type='number' placeholder='second number' value={this.state.num2} />
                <button onClick={this.add}>+</button>
                <button onClick={this.subtract}>-</button>
                <button onClick={this.divide}>/</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.clear}>clear</button>
            </div>
        )
    }
}

export default Calculator;