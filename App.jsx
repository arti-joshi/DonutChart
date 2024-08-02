// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import graph from "./components/graph.js";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
          <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
            Expense Tracker
          </h1>

          <div className="grid md:grid-cols-2 gap-4">
            <graph></graph>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
