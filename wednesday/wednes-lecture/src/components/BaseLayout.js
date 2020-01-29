import React, {Component} from 'react'

class BaseLayout extends Component {

    render() {
        return (<>
        
            <p>Other components injected here</p>
            {this.props.children}
        
            </>)
    }

}

export default BaseLayout