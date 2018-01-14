import React, { Component } from 'react';
import TodoListTemplate from "./components/TodoListTemplate/TodoListTemplate";
import Form from "./components/Form/Form";
import TodoItemList from "./components/TodoItemList/TodoItemList";

class App extends Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "타겟북 Todo test 1", checked: true },
      { id: 1, text: "타겟북 Todo test 2", checked: false },
      { id: 2, text: "타겟북 Todo test 3", checked: false }
    ]
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    if (input.trim() === "") return;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input.trim(),
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = id => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  /* 
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }
  */

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        }
      >
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;