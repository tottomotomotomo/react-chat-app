import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import TextField from "./components/TextField";
import Cell from "./components/Cell";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen p-4 App">
      <header></header>

      <main className="flex flex-col h-full">
        <ul className="grow">
          <Cell text={"こんにちは"}></Cell>
        </ul>

        <div className="grow-0">
            <TextField onButtonClick={() => {console.log("test")}}></TextField>
        </div>
      </main>
    </div>
  )
}

export default App
