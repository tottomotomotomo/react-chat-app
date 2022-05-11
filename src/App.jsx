import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import TextField from "./components/TextField";
import Cell from "./components/Cell";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header></header>

      <main className="flex flex-col">
        <ul className="grow">
          <Cell text={"こんにちは"}></Cell>
        </ul>

        <div>
            <TextField onButtonClick={() => {console.log("test")}}></TextField>
        </div>
      </main>
    </div>
  )
}

export default App
