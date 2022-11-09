import './App.css';
import FoodBox from './components/FoodBox/FoodBox';

function App() 
{
    return (
        <FoodBox food={ {
            name: "Orange",
            calories: 85,
            image: "https://i.imgur.com/abKGOcv.jpg",
            servings: 1
          }} />);
}  

export default App;
