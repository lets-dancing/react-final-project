import { useState } from 'react';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';
import uuid from 'react-uuid';

function App() {
  const [mealPlans, setMealPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(false);

  const addMeal =()=> {
    const newMeal = {
      title: "Meal list...",
      id: uuid(),
      mealForADay: "",
      ingridients: "",
    }
    setMealPlans([newMeal, ...mealPlans])
    setSelectedDay(newMeal.id)
  }

  const deleteMeal =(id)=> {
    const newPlans = mealPlans.filter((elem) => elem.id !== id)
    setMealPlans(newPlans)
  }
  const updateDay =(myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if(mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  }
  const getActiveMeal =()=> {
    return mealPlans.find(({id}) => id === selectedDay)
  }

  return (
    <div className='App'>
      <MyList 
      mealPlans={mealPlans} 
      addMeal={addMeal} 
      deleteMeal={deleteMeal}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
      />
      <MyMealsAndIngridients
      selectedDay={getActiveMeal()}
      updateDay={updateDay}
      />
    </div>
  );
}

export default App;
