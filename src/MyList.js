function MyList({mealPlans, addMeal}) {
    return (
        <div>
            <div>
                <h1>Weekly Meal Plan Ideas</h1>
                <button className="button-add" onClick={addMeal}>Add</button>
                <button className="button-delete">Delete</button>
            </div>
            <div>
                {mealPlans.map(({title}) => (
                    <div>
                        <p>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyList;