import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Counter from "./features/Counter";




function App() {

  const [updateApi , setupdateApi] = useState()

  useEffect(()=>{
    const api = 'https://pokeapi.co/api/v2/pokemon/ditto'

    axios.get(api).then((response) => {
      setupdateApi(response.data)
    })



  },[])
  if(updateApi){
    console.log (updateApi.sprites.back_default)
  }


  return (   
    <div>
      <Counter />
      <a href= {updateApi? updateApi.sprites.back_default : "hummm"}>
      {updateApi? updateApi.sprites.back_default : "hummm"}
      </a>

      <img src={updateApi? updateApi.sprites.back_default : "hummm"} alt="" />
      
    </div>
  );
}

export default App;
