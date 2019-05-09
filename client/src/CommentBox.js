import React, {Component} from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import DATA from './data'
import './CommentBox.css'

class CommentBox extends Component {
    constructor() {
        super()
        this.state = { data: []}
    }
    render(){
        return (
            <div className="container">
                <div className="comments">
                    <h2>Comments:</h2>
                    <CommentList data={DATA} />
                </div>
                <div className="form">
                    <CommentForm />
                </div>
            </div>
        )
    }
}
export default CommentBox;