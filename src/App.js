import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/Layout/Header';
import AddToDo from './components/AddTodo';
import About from './components/Layout/About'
import uuid from 'uuid';

class App extends Component{
  state={
    todos: []
  }

  markComplete = (id) =>{
      console.log(id);
      this.setState({ todos: this.state.todos.map (todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      }) });
  } 

  delTodo = (id) =>{
    console.log(id);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addToDo = (title) =>{
    console.log(title);
    const newtodo={
      id:uuid.v4(),
      title,
      completed: false,
    }
    this.setState({ todos: [...this.state.todos, newtodo] });
  }

  render() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="container">
      <Route exact path='/' render={ props =>(
        <React.Fragment>
        <AddToDo addToDo={this.addToDo} />
        <Todos todos= {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </React.Fragment>
      )}/>
      <Route path="/about" component={About} />
      </div>
      </div>
    </Router>
  );
}
}

export default App;
