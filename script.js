const lunchMeals = [
    "Soy Garlic Chicken Stir-Fry",
    "Chicken Teriyaki Rice Bowl",
    "Chicken Burrito Bowl",
    "Chicken Pesto Pasta",
    "Chicken Shawarma Bowl"
];

const dinnerMeals = [
    "Kerala Beef Curry",
    "Beef Keema with Rice",
    "Korean Beef Bowl",
    "Beef Chili",
    "Beef Stir-Fry"
];

const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function () {

    const servings = document.getElementById("servings").value;

    const randomLunch =
        lunchMeals[Math.floor(Math.random() * lunchMeals.length)];

    const randomDinner =
        dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)];

    document.getElementById("lunchMeal").textContent = randomLunch;

    document.getElementById("dinnerMeal").textContent = randomDinner;

    document.getElementById("lunchInfo").textContent =
        servings + " servings";

    document.getElementById("dinnerInfo").textContent =
        servings + " servings";
});
