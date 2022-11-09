import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() 
{
  const [food, setFood] = useState(foods);
  return(
      <>
      {
         food.map((item)=>{
            return(
                <div>
                  <p>{item.name}</p>
                  <img src={item.image} width={100} alt=""/>
                </div>
            );
       })}  
      </>
  );
}
export default App;
