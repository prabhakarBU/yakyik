import React, { Component } from 'react'
import Comment from '../presentation/Comment'
import styles from './styles'
import superagent from 'superagent'

class Comments extends Component {

    constructor(){
        super()
        this.state = {
            comment:{
                username: '',
                body: '',
                timestamp:''
            },
            list: []
        }
    }

    componentDidMount(){
        console.log('component mounted');
        
        superagent
        .get('api/comment')
        .query(null)
        .set('Accept','text/json')
        .end((err, response) => {
            if(err){    
                alert('Error : '+ err);
                return;
            }

            console.log(JSON.stringify(response.body));
            let results = response.body.results;
            
            this.setState({
                list: results
            });
            
        })
    }

    submitComment(){
        console.log("submit comment : "+ JSON.stringify(this.state.comment));
        let updatedList = Object.assign([],this.state.list);
        updatedList.push(this.state.comment)
        this.setState({
            list: updatedList
        })
    }

    updateUsername(event){
        console.log('updating username '+ event.target.value);
        // this.state.comment['username'] =  event.target.value // Never do this  WRONG !! mutation of state!!
        //get copy
        let updatedComment = Object.assign({}, this.state.comment);
        //update copy
        updatedComment['username'] =   event.target.value;
        //re-assign state
        this.setState({
            comment: updatedComment
        })
    }

    updateBody(event){
        console.log('updating comment '+ event.target.value);
        //get copy
        let updatedComment = Object.assign({}, this.state.comment);
        //update copy
        updatedComment['body'] =   event.target.value;
        //re-assign state
        this.setState({
            comment: updatedComment
        })

    }

    render(){

        const commentList = this.state.list.map((comment,i)=> {
            return(
                <li key={i}><Comment currentComment={comment} /></li>
            )
        })

        return(
            <div>
                <h2>Zone 1</h2>
                <div style={styles.comment.commentsBox}>
                <ul style={styles.comment.commentsList}>
                    {commentList}
                </ul>
                <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br/>
                <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /><br/>
                <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
                </div>
            </div>
        )
    }

}

export default Comments