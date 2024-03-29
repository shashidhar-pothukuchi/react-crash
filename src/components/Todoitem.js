import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 
            'none'
        }
    }

    render() {
        const{ id, title }= this.props.todo;
        return (
            <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button style={btnstyle} onClick={this.props.delTodo.bind(this, id)}>Delete</button>
        </p>
      </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnstyle = {
    background: '#3295b3',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'right',
}

export default Todoitem;
