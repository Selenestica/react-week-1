import React, {Component} from 'react'

class Counter extends Component {

    constructor(props) {
        super(props) //base class // parent class
        this.state = {
            like: 0
        }

        //binding value of this to handleIncrememnt function's this, (if using a non-arrow function)
        //this.handleIncrement = this.handleIncrement.bind(this)
    }

    handleIncrement = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    /*
    handleIncrement () {
        //cant change a state. only can replace
        this.setState({
            like: this.state.like + 1
        })
    }
    */

    render() {
        return (
            <div>
                <h1>{this.state.like}</h1>
                <button onClick={this.handleIncrement}>Like</button>
            </div>
        )
    }
}

export default Counter