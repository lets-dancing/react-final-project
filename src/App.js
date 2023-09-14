import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {
  const [mealPlans, setMealPlans] = useState([]);

  const addMeal =()=> {
    const newMeal = {
      title: "Meal list..."
    }
    setMealPlans([newMeal, ...mealPlans])

  }
  return (
    <div className='App'>
      <MyList mealPlans={mealPlans} addMeal={addMeal}/>
      <MyMealsAndIngridients/>
    </div>
  );
}

export default App;
