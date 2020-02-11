import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './components/TodoComponents/Todo.css';

const todo = [
    {
      task: 'Organize Garage',
      id: 1,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 2,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todoList: todo
    }
  }
  


  toggleItem = clickedId => {
    
    const newTodoList = this.state.todoList.map(item => {
     
      if (item.id === clickedId) {
       
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    
    this.setState({
      todoList: newTodoList
    });
  };


  addNewItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  reset = (e) => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => {
        if(!item.completed === item.completed){
          return item.completed;
        }else{
          return !item.completed;
        }
      })
    })
  }

  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} reset={this.reset}/>
        <TodoList todo={this.state.todoList}
        toggleItem={this.toggleItem}
        reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
