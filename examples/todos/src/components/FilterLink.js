import React from 'react'
import { todosModel } from '../models/todos'

function FilterLink({ filter, children }) {
  const active = filter === todosModel.getVisibilityFilter()
  const onClick = () => todosModel.setVisibilityFilter(filter)

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  )
}

export default FilterLink
