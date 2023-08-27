import React, { useState } from 'react'

type propTypes = {
  addTask: (text: string) => void
}

const AddTask = ({ addTask }: propTypes) => {
  const [text, setText] = useState<string>('')

  const onAddTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTask(text)
      setText('')
    }
  }
  return (
    <div>
      <input
        value={text}
        placeholder="Add Task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onAddTaskSubmit}>Add Task</button>
    </div>
  )
}

export default AddTask
