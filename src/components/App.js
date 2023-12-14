
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let [greet, setGreet] = useState("")
  
  function handleGreet(e){
    e.preventDefault()
    setGreet(e.target.value)
  }

  
  return (
    <div>
        {/* Do not remove the main div */}
        
        <form>
          <p>Enter your name:</p>
          <input type="text" onChange={handleGreet}></input>

         {
           greet!="" && (<p>Hello {greet}!</p>)
         }
        </form>
    </div>
  )
}

export default App
