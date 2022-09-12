import React from "react";
import TodosList from "./TodosList";
import Header from './Header';
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos: []
    };

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            }),
        }))
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    componentDidMount() {
        let temp = localStorage.getItem("todos")
        let loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
          this.setState({
            todos: loadedTodos
          })
        }
      }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
          const temp = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", temp)
        }
      }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo
                        addTodoProps={this.addTodoItem}
                    />
                    <TodosList
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer