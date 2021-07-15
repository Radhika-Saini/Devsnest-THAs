
import './App.css';
import CalorieCard from './CalorieCard';
import Calories from './CalorieInfo';

function Card(calorie) {
  return (
    <CalorieCard 
    title={calorie.title}
    source={calorie.source}
    text={calorie.text}
    />
  )
}

function App(){
  return(
    <div className="App">
      <h1 className="heading-text">Calorie Card</h1>
      <div className="Container">
        {Calories.map(Card)}
      </div>
    </div>
  )
}

export default App;
