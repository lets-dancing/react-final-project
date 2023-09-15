function MyList({mealPlans, addMeal, deleteMeal, selectedDay, setSelectedDay}) {

    return (
        <div>
            <div>
                <h1>Weekly Meal Plan Ideas</h1>
                <button className="button-add" onClick={addMeal}>Add</button>
            </div>
            <div>
                {mealPlans.map(({title, id, mealForADay}) => (
                    <div key={id} onClick={() => setSelectedDay(id)} className={`meal ${id === selectedDay ? "selected" : "default"}`}>
                        <p className="title">{title}</p>
                        <p className="field">{mealForADay.substring(0, 60)}</p>
                        <button className="button-delete" onClick={() => deleteMeal(id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyList;