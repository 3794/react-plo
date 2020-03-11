import React from 'react'
import Footer from './containers/Footer'
import AddTodo from './components/AddTodo'
import TodoList from './containers/TodoList'

const App = () => {
  return (
    <div>
      <AddTodo />
      <Footer />
      <TodoList />
    </div>
  )
}

export default App
