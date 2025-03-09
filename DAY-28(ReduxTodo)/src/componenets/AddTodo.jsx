import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, selectTodo, updateTodo } from '../Features/todo/todoSlice';

export default function AddTodo() {
  const [formData, setFOrmData] = React.useState({
    id: Date.now(),
    task: '',
    priority: ''
  })
  const dispatch = useDispatch();
  const selectedTodo = useSelector(state => state.selectedTodo)

  useEffect(() => {
    if (selectedTodo) {
      setFOrmData(selectedTodo)
    }
  }, [selectedTodo])

  const handleOnChange = (e) => {
    setFOrmData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(selectedTodo) {
      dispatch(updateTodo(formData))
    } else {
      dispatch(addTodo(formData))
    }
    setFOrmData({
      id: Date.now(),
      task: '',
      priority: ''
    })
  }


  return (
    <div>
      <h1>All todo list</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <label htmlFor="">Task:</label>
        <input type="text" name='task' value={formData.task} onChange={handleOnChange} />
        <label htmlFor="">Priority:</label>
        <select name="priority" id="" value={formData.priority} onChange={handleOnChange}>
          <option hidden>Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type='submit'>{selectedTodo ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}
