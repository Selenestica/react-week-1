import React, {Component} from 'react'
import './App.css';

class Welcome extends Component {
    render() {
        return (
            <div>
                {this.props.fname} {this.props.lname}
            </div>
        )
    }
}

export default Welcome