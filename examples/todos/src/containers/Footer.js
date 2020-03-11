import React from 'react'
import FilterLink from '../components/FilterLink'
import { VisibilityFilters } from '../constants'
import { todosSubscribe } from '../models/todos'
import { connect } from 'react-plo'

const Footer = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  )
}
export default connect([todosSubscribe])(Footer)
