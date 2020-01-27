import React, {Component} from 'react'

class Article extends Component {

    render() {
        return (
            <>
                <h3>{this.props.articleTitle}</h3>
                <p>
                    {this.props.articleBody}
                </p>
                <div className="comments-likes-div">
                    <p className="comments-likes-text">
                        {this.props.articleComments}
                    </p>
                    <p className="comments-likes-text">
                        {this.props.articleLikes}
                    </p>
                </div>
            </>
        )
    }

}

export default Article