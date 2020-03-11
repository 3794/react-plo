import { createModel } from 'plo'
import { VisibilityFilters } from '../constants'

let nextTodoId = 1

const todosObject = {
  todos: [
    {
      id: nextTodoId++,
      text: 'hello',
      completed: false,
    },
  ],
  filter: VisibilityFilters.SHOW_ALL,
  getVisibleTodos() {
    switch (this.filter) {
      case VisibilityFilters.SHOW_ALL:
        return this.todos
      case VisibilityFilters.SHOW_COMPLETED:
        return this.todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return this.todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + this.filter)
    }
  },
  getVisibilityFilter() {
    return this.filter
  },
  setVisibilityFilter(filter) {
    this.filter = filter
  },
  addTodo(text) {
    this.todos.push({
      id: nextTodoId++,
      text,
      completed: false,
    })
  },
  toggleTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos[index].completed = !this.todos[index].completed
  },
}

const [todosModel, todosSubscribe] = createModel(todosObject)

export { todosModel, todosSubscribe }
