import React from 'react'
import Todo from '../components/Todo'
import { todosSubscribe, todosModel } from '../models/todos'
import { connect } from 'react-plo'

const TodoList = () => {
  return (
    <ul>
      {todosModel.getVisibleTodos().map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => todosModel.toggleTodo(todo.id)}
        />
      ))}
    </ul>
  )
}

export default connect([todosSubscribe])(TodoList)
