import React from 'react'

import { todoItem } from './TaskItem'
import TodoItem from './TaskItem'

type propTypes = {
  todoItems: todoItem[]
}

const TodoList = ({ todoItems }: propTypes) => {
  return (
    <>
      {todoItems.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />
      })}
    </>
  )
}

export default TodoList
