import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calendar from '../src/components/calendar.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>Testing Calendar Integration</h1>
      
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    <div>
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=c_1e92d15e451b9bb0032a9cc35a117f40844311302fab863f8f49f8f068a0ac7d%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}

      {/* <!-- Elfsight Event Calendar | Untitled Event Calendar --> */}
      {/* <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div class="elfsight-app-fb6754bf-a4d9-479b-9af8-b4ca0b25f6c6" data-elfsight-app-lazy></div> */}
    </div>
    <p> ok, now testing my calendar: </p>

    <Calendar />

    </>
  )
}

export default App
