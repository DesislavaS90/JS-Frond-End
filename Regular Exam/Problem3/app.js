const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadMealsBtn = document.getElementById('load-meals');
const editMealBtn = document.getElementById('edit-meal');
const addMealBtn = document.getElementById('add-meal');

const inputFood = document.getElementById('food');
const inputTime = document.getElementById('time');
const inputCalories = document.getElementById('calories');


const mealsList = document.getElementById('list');

loadMealsBtn.addEventListener('click', loadMeals);
addMealBtn.addEventListener('click', addMeal);
editMealBtn.addEventListener('click', editMeal);

let mealId = '';

async function loadMeals() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    const meals = Object.values(data);

    mealsList.innerHTML = '';

    for (const meal of meals) {
        const mealElement = renderMeals(meal);

        mealsList.appendChild(mealElement);
    }

    editMealBtn.disabled = true;
}

async function addMeal(e) {
    e.preventDefault();

    const food = inputFood.value;
    const time = inputTime.value;
    const calories = inputCalories.value;

    if (!food || !time || !calories) {
        return;
    }

    const meal = {
        food,
        time,
        calories
    };

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(meal)

    });

    inputFood.value = '';
    inputTime.value = '';
    inputCalories.value = ''; 

    await loadMeals();
    
}

async function editMeal(e) {
    e.preventDefault();

    const food = inputFood.value;
    const time = inputTime.value;
    const calories = inputCalories.value;

    if (!food || !time || !calories) {
        return;
    }

    const meal = {
        food,
        time,
        calories,
        _id: mealId
    };

    const response = await fetch(baseUrl + mealId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(meal)
    });
    
    inputFood.value = '';
    inputTime.value = '';
    inputCalories.value = '';

    await loadMeals();

    editMealBtn.disabled = false;
    addMealBtn.disabled = true;
 
}

function renderMeals(meal) {

    const div = document.createElement('div');
    div.className = 'meal';

    const h2Food = document.createElement('h2');
    h2Food.textContent = meal.food;

    const h3Calories = document.createElement('h3');
    h3Calories.textContent = meal.calories;

    const h3Time = document.createElement('h3');
    h3Time.textContent = meal.time;

    divBtns = document.createElement('div');
    divBtns.className = 'meal-buttons';

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.className = 'change-meal';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-meal';

    divBtns.appendChild(changeBtn);
    divBtns.appendChild(deleteBtn);

    div.appendChild(h2Food);
    div.appendChild(h3Calories);
    div.appendChild(h3Time);

    div.appendChild(divBtns);

    changeBtn.addEventListener('click', () => {

        inputFood.value = meal.food;
        inputTime.value = meal.time;
        inputCalories.value = meal.calories;

        mealId = meal._id;

        div.remove();

        editMealBtn.disabled = false;
        addMealBtn.disabled = true;
        
    })

    deleteBtn.addEventListener('click', async () => {

        const response = await fetch(baseUrl + meal._id, {
            method: 'DELETE'
        });

        await loadMeals();

        addMealBtn.disabled = false;
        
    })

    return div;
}