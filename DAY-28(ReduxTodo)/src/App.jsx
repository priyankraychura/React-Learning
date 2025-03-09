import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './componenets/Todo'
import AddTodo from './componenets/AddTodo'

function App() {
  return (
    <>
      <Todo />
      <AddTodo />
    </>
  )
}

export default App
