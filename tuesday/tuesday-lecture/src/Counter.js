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
                <>
                    
                </>
        )
    }

}

export default Counter