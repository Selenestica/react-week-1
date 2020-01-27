import React, {Component} from 'react'

class Counter extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            count: 5
        }
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div className="counter-div">
              <img onClick={this.decreaseCount} id="sad-image" src="sadfaceemoji.jpg" />
                <div id="counter-text-div">
                    <p id="counter-text">{this.state.count}</p>
                </div>
              <img onClick={this.increaseCount} id="happy-image" src="happyemoji.png" />
            </div>
        )
    }

}

export default Counter

