import React,{useState} from 'react';
import './App.css';
import CalorieCard from './CalorieCard';
import Calories from './CalorieInfo';



function App(){
  const [calories,setcalories]=useState(Calories);
  
  function Card(calorie,index) {
    return (
      <CalorieCard 
      title={calorie.title}
      source={calorie.source}
      text={calorie.text}
      key={index}
      calories={calories}
      setCalories={setcalories}
      index={index}
      
      />
    )
  }
  
  
  return(
    <div className="App">
      <h1 className="heading-text">Calorie Card</h1>
      <div className="Container">
        {Calories.length>0?calories.map(Card): <h1 style={{textAlign:"center"}}>No Data Found</h1>}
      </div>
    </div>
  )
}

export default App;
