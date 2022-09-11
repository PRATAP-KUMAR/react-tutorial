import React, { Component } from 'react';

class InputTodo extends Component {

    state = {
        title: "",
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })
    } else {
        alert("input field cant be empty")
    }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button classname="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo;