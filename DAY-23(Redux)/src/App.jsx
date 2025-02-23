import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import ReduxCounter from './components/ReduxCounter'
import { Store } from './App/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={Store}>
        <ReduxCounter />
      </Provider>
    </>
  )
}

export default App
