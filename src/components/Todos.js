import React,{ Component } from 'react';
import PropTypes from  'prop-types';
import Todoitem from './Todoitem';


class Todos extends Component{

    render() {
  return this.props.todos.map((todo) => (
    <div>
    <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    </div>
  ));
}
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired
}



export default Todos;
