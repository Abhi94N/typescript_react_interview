import { useState } from 'react'
import TaskItem from './components/TaskItem'
import { taskItemType } from './components/TaskItem'
import AddTask from './components/AddTask'

const fakeData: taskItemType[] = [
  {
    id: 1,
    text: 'Task 1',
    isComplete: false,
  },
  {
    id: 2,
    text: 'Task 2',
    isComplete: false,
  },
]

function App() {
  const [todoList, setTodoList] = useState<taskItemType[]>(fakeData)

  const addTask = (text: string) => {
    console.log(addTask)
    const newTask: taskItemType = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      text: text,
      isComplete: false,
    }

    setTodoList([...todoList, newTask])
  }

  const onDelete = (id: number) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const isComplete = (id: number) => {
    const updatedTodoList = todoList.map((task) => {
      return task.id === id ? { ...task, isComplete: !task.isComplete } : task
    })
    setTodoList(updatedTodoList)
  }

  return (
    <div className="App">
      {todoList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isComplete={isComplete}
          onDelete={onDelete}
        />
      ))}
      <AddTask addTask={addTask} />
    </div>
  )
}

export default App
