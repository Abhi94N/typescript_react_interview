export type taskItemType = {
  text: string
  id: number
  isComplete: boolean
}

type propTypes = {
  task: taskItemType
  isComplete: (id: number) => void
  onDelete: (id: number) => void
}

const TaskItem = ({ task, isComplete, onDelete }: propTypes) => {
  return (
    <>
      <h1>{task.text}</h1>
      <input
        checked={task.isComplete}
        type="checkbox"
        onChange={() => isComplete(task.id)}
      />
      <button onClick={() => onDelete(task.id)}>X</button>
    </>
  )
}

export default TaskItem
