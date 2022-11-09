import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';

function App() 
{
  const [food, setFood] = useState(foods);
  return(
      <>
      <h1>Food List</h1> 
      {
         food.map((item)=>{
            console.log(item.name);
            return(
              <FoodBox food={ {
            name: item.name,
            calories: item.calories,
            image: item.image,
            servings:item.servings
          }} />);
       })}  
      </>
  );
}
export default App;
