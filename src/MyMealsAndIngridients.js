function MyMealsAndIngridients() {
    return (
        <div className="whole-plan">
            <div className="meal-aditing">
                <input
                type="text"
                className="myInput"
                placeholder="Today is..."
                />
                <textarea
                placeholder="Write your meal plan here..."

                />
                <textarea
                placeholder="List of ingridients"

                />
            </div>
        </div>
    );
}

export default MyMealsAndIngridients;