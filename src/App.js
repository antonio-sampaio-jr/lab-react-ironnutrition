import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import FoodBox from './components/FoodBox/FoodBox';
import SearchForm from './components/SearchForm/SearchForm';
import { Row, Divider, Button, Col } from 'antd';

function App() 
{
  const [food, setFood] = useState(foods); 
  const [search, setSearch] = useState("");

  const deleteFood = (selectedFood) => {
    setFood(foods.filter((food) => {
        return selectedFood !== food.name
    }));}

  const foodMap = foods
        .filter((food) => (food.name).toLowerCase().includes(search.toLowerCase()))
        .map((food, index) => {
            return <Col key={ index }><FoodBox food={ food } deleteFood={ deleteFood } /></Col>
  });
  return(
    <div className="App">
       <>
       <AddFoodForm food = {food} setFood = {setFood}/>
       
      <Button> Hide Form / Add New Food </Button>

      <SearchForm
                    search={ search }
                    setSearch={ setSearch }
                />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {
         food.map((item)=>{
            return(
              <FoodBox food={ {
            name: item.name,
            calories: item.calories,
            image: item.image,
            servings:item.servings
          }} />);
       })}  
      </Row>
      </>
    </div>
  );
}
export default App;
