import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';

function App() {

  const[joke,setJoke] = useState("loading..");

  useEffect(()=>{
    newJoke();
   },[])

  const newJoke = ()=>{
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(res2 => {
      console.log(res2)
      setJoke(res2.setup +"   \n   "+ res2.punchline)
    }
  )
        
        // window.location.reload(true);
  }


  return (
    <div className="App">
      {/* <h1>Pawan Saini</h1> */}
      <div className='container'>

      <h1>Fetching Random Jokes</h1>
      <h4>{joke}</h4>
      <button onClick={newJoke}>Get antoher joke</button>

      </div>
      
    </div>
  );
}

export default App;
