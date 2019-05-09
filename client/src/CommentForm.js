import React from 'react';
import PropTypes from 'prop-types'

const CommentForm = (props) => (
    <form onSubmit={props.submitComment} >
        <input 
            type="text"
            name="author"
            placeholder="Your Name"
            value={props.author}
            onChange={props.handleChangeText}
        />
        <input 
            type="text"
            name="text"
            placeholder="Enter Text"
            value={props.text}
            onChange={props.handleChangeText}
        />
        <button type="submit">Submit</button>
    </form>
)

CommentForm.propTypes = {
    submitComment: PropTypes.func.isRequired,
    handleChangeText: PropTypes.func.isRequired,
    text: PropTypes.string,
    author: PropTypes.string
}

CommentForm.defaultProps = {
    text: '',
    author: ''
}

export default CommentForm;