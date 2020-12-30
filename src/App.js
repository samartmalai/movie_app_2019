
import React from "react";

function Food({ fav }){
  
  return (<h1>I like {fav}</h1>);
}

const foodILike = [
  {
    id:1,
    name: "kimchi"
    
  },
  { 
    id:2,
    name: "Samgyeopsal"
    
  },
  {
    id:3,
    name: "Bibimbap"
    
  },
  {
    id:4,
    name: "Doncasu"
    
  }
]

function App() {
  return (
    <div>
    {foodILike.map(dish => (
      <Food key={dish.id} fav={dish.name} />
    ))}


   
    </div>);

}

export default App;
