import { useState } from 'react'
import DetailForm from './components/detailForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DetailForm />
    </>
  )
}

export default App
