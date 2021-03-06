import React, {Component} from "react";


class TodoForm extends Component {
constructor(){
    super();
    this.state={
        newItem: ''
    };
}

handleChanges = e => {
   
    this.setState({
     
      newItem: e.target.value
    });
  };

 
  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="newItem" value={this.state.newItem} onChange={this.handleChanges} />
            <button>Add Todo</button>
            
            
        </form>
        
       
       
        
        
        </div>
    );
}

}


export default TodoForm;