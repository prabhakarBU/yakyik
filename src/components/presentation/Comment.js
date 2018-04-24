import React, {Component} from 'react'
import styles from './styles'

class Comment extends Component{
    render(){
        return(
            <div style={styles.comment.commentBox}>
                <p style={styles.comment.bodyStyle}>
                    {this.props.currentComment.body}
                </p>
                <span style={styles.comment.usernameStyle}>{this.props.currentComment.username}</span>
                <span style={styles.comment.separatorStyle}>|</span>
                <span style={styles.comment.timestampStyle}>{this.props.currentComment.timestamp}</span>
            </div>
        )
    }
}

export default Comment