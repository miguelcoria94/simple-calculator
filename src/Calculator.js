import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            num1: "0",
            num2: "0"
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

    render() {
        return (
            <div>
                <h1>Result:{this.state.result}</h1>
                <input onChange={this.handleFirstNum} type='number' placeholder='first number' value={this.state.num1} />
                <input onChange={this.handleSecondNum} type='number' placeholder='second number' value={this.state.num2} />
            </div>
        )
    }
}

export default Calculator;