import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title: ''}); 
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input type='text' style={{flex: '10',padding: '5px'}} 
                    name='title' value = {this.state.title} onChange={this.onChange}
                     placeholder="Add new item here..."/>
                    <input type="submit" value="Add Item" style={{flex: '1'}} className="btn" />
                </form>
            </div>
        )
    }
}

export default AddTodo
