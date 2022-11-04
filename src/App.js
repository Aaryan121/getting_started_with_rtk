import axios from "axios";
import React, { useEffect } from "react";
import Counter from "./features/Counter";




function App() {

  useEffect(()=>{
    const api = 'https://pokeapi.co/api/v2/pokemon/ditto'

    axios(api).then((response) =>{
      console.log(response.data)
    });

  },[])


  return (

    <Counter />
  );
}

export default App;
