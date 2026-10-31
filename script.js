const lunchMeals = [
    {
        name: "Soy Garlic Chicken Stir-Fry",
        baseServings: 4,

        ingredients: [
            { name: "Chicken breast", amount: 800, unit: "g" },
            { name: "Rice", amount: 300, unit: "g" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Broccoli", amount: 300, unit: "g" },
            { name: "Soy sauce", amount: 60, unit: "ml" },
            { name: "Garlic cloves", amount: 4, unit: "" },
            { name: "Sesame oil", amount: 15, unit: "ml" }
        ],

        instructions: [
            "Cook the rice according to the package instructions.",
            "Cut the chicken into bite-sized pieces.",
            "Cook the chicken in a large pan until fully cooked.",
            "Add the bell peppers and broccoli.",
            "Add the garlic, soy sauce and sesame oil.",
            "Cook everything together for another 2 to 3 minutes.",
            "Divide evenly between meal prep containers."
        ]
    },

    {
        name: "Chicken Pesto Pasta",
        baseServings: 4,

        ingredients: [
            { name: "Chicken breast", amount: 700, unit: "g" },
            { name: "Pasta", amount: 400, unit: "g" },
            { name: "Pesto", amount: 150, unit: "g" },
            { name: "Cherry tomatoes", amount: 250, unit: "g" },
            { name: "Spinach", amount: 150, unit: "g" },
            { name: "Parmesan cheese", amount: 60, unit: "g" }
        ],

        instructions: [
            "Cook the pasta according to the package instructions.",
            "Cut the chicken into small pieces.",
            "Cook the chicken until fully cooked.",
            "Add the spinach and cherry tomatoes.",
            "Add the cooked pasta and pesto.",
            "Mix everything together.",
            "Top with Parmesan cheese.",
            "Divide evenly between meal prep containers."
        ]
    },

    {
        name: "Chicken Burrito Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken breast", amount: 700, unit: "g" },
            { name: "Rice", amount: 300, unit: "g" },
            { name: "Black beans", amount: 400, unit: "g" },
            { name: "Corn", amount: 300, unit: "g" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Salsa", amount: 200, unit: "g" },
            { name: "Cheddar cheese", amount: 120, unit: "g" }
        ],

        instructions: [
            "Cook the rice.",
            "Season and cook the chicken until fully cooked.",
            "Slice the chicken.",
            "Drain and rinse the black beans.",
            "Prepare the corn and bell peppers.",
            "Divide the rice between containers.",
            "Add chicken, beans, corn and peppers.",
            "Top with salsa and cheese."
        ]
    }
];


const dinnerMeals = [
    {
        name: "Kerala Beef Curry",
        baseServings: 4,

        ingredients: [
            { name: "Beef", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Ginger", amount: 30, unit: "g" },
            { name: "Coconut milk", amount: 400, unit: "ml" },
            { name: "Curry powder", amount: 20, unit: "g" },
            { name: "Garam masala", amount: 10, unit: "g" }
        ],

        instructions: [
            "Cut the beef into bite-sized pieces.",
            "Slice the onions and tomatoes.",
            "Cook the onions until golden.",
            "Add ginger and garlic.",
            "Add tomatoes and spices.",
            "Add the beef and mix well.",
            "Add coconut milk.",
            "Simmer until the beef is tender.",
            "Serve with rice, roti or naan."
        ]
    },

    {
        name: "Korean Beef Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Ground beef", amount: 700, unit: "g" },
            { name: "Rice", amount: 300, unit: "g" },
            { name: "Soy sauce", amount: 60, unit: "ml" },
            { name: "Garlic cloves", amount: 4, unit: "" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Green onions", amount: 4, unit: "" },
            { name: "Sesame oil", amount: 15, unit: "ml" }
        ],

        instructions: [
            "Cook the rice.",
            "Brown the ground beef in a large pan.",
            "Add the garlic.",
            "Add soy sauce and sesame oil.",
            "Cook until the beef absorbs the sauce.",
            "Prepare the carrots and green onions.",
            "Divide rice between containers.",
            "Top with beef, carrots and green onions."
        ]
    },

    {
        name: "Beef Keema",
        baseServings: 4,

        ingredients: [
            { name: "Ground beef", amount: 700, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 3, unit: "" },
            { name: "Frozen peas", amount: 250, unit: "g" },
            { name: "Garlic cloves", amount: 4, unit: "" },
            { name: "Ginger", amount: 25, unit: "g" },
            { name: "Garam masala", amount: 10, unit: "g" }
        ],

        instructions: [
            "Cook the onions until soft and golden.",
            "Add ginger and garlic.",
            "Add ground beef and cook until browned.",
            "Add tomatoes and spices.",
            "Cook until the tomatoes soften.",
            "Add frozen peas.",
            "Simmer for around 10 minutes.",
            "Serve with rice, naan or roti."
        ]
    }
];


let selectedLunch = null;
let selectedDinner = null;


const generateButton =
    document.getElementById("generateButton");


generateButton.addEventListener("click", function () {

    const servings =
        Number(document.getElementById("servings").value);


    if (servings < 1) {
        alert("Please enter at least 1 serving.");
        return;
    }


    selectedLunch =
        lunchMeals[
            Math.floor(Math.random() * lunchMeals.length)
        ];


    selectedDinner =
        dinnerMeals[
            Math.floor(Math.random() * dinnerMeals.length)
        ];


    document.getElementById("lunchMeal").textContent =
        selectedLunch.name;


    document.getElementById("dinnerMeal").textContent =
        selectedDinner.name;


    document.getElementById("lunchInfo").textContent =
        servings + " servings";


    document.getElementById("dinnerInfo").textContent =
        servings + " servings";


    document.getElementById("lunchRecipeButton").style.display =
        "inline-block";


    document.getElementById("dinnerRecipeButton").style.display =
        "inline-block";


    document.getElementById("lunchRecipe").style.display =
        "none";


    document.getElementById("dinnerRecipe").style.display =
        "none";


    document.getElementById("lunchRecipeButton").textContent =
        "View Lunch Recipe";


    document.getElementById("dinnerRecipeButton").textContent =
        "View Dinner Recipe";


    createGroceryList(servings);
});


document
    .getElementById("lunchRecipeButton")
    .addEventListener("click", function () {

        const servings =
            Number(document.getElementById("servings").value);

        toggleRecipe(
            selectedLunch,
            servings,
            "lunchRecipe",
            "lunchRecipeButton",
            "Lunch"
        );
    });


document
    .getElementById("dinnerRecipeButton")
    .addEventListener("click", function () {

        const servings =
            Number(document.getElementById("servings").value);

        toggleRecipe(
            selectedDinner,
            servings,
            "dinnerRecipe",
            "dinnerRecipeButton",
            "Dinner"
        );
    });


function toggleRecipe(
    recipe,
    servings,
    elementId,
    buttonId,
    mealType
) {

    const recipeBox =
        document.getElementById(elementId);

    const button =
        document.getElementById(buttonId);


    if (recipeBox.style.display === "block") {

        recipeBox.style.display = "none";

        button.textContent =
            "View " + mealType + " Recipe";

        return;
    }


    showRecipe(
        recipe,
        servings,
        elementId
    );


    button.textContent =
        "Hide " + mealType + " Recipe";
}


function showRecipe(
    recipe,
    servings,
    elementId
) {

    const scale =
        servings / recipe.baseServings;


    let html = "";

    html += "<h3>Ingredients</h3>";

    html += "<ul>";


    recipe.ingredients.forEach(function (ingredient) {

        const scaledAmount =
            formatAmount(
                ingredient.amount * scale
            );


        html +=
            "<li>" +
            scaledAmount +
            (ingredient.unit
                ? " " + ingredient.unit
                : "") +
            " " +
            ingredient.name +
            "</li>";
    });


    html += "</ul>";


    html += "<h3>Instructions</h3>";

    html += "<ol>";


    recipe.instructions.forEach(function (step) {

        html +=
            "<li>" +
            step +
            "</li>";
    });


    html += "</ol>";


    const recipeBox =
        document.getElementById(elementId);


    recipeBox.innerHTML = html;

    recipeBox.style.display = "block";
}


function createGroceryList(servings) {

    const groceryItems = {};


    addRecipeIngredients(
        selectedLunch,
        servings,
        groceryItems
    );


    addRecipeIngredients(
        selectedDinner,
        servings,
        groceryItems
    );


    let groceryHTML = "<ul>";


    Object.values(groceryItems)
        .forEach(function (item) {

            const amount =
                formatAmount(item.amount);


            groceryHTML +=
                "<li>" +
                "<input type='checkbox'> " +
                amount +
                (item.unit
                    ? " " + item.unit
                    : "") +
                " " +
                item.name +
                "</li>";
        });


    groceryHTML += "</ul>";


    document.getElementById("groceryList").innerHTML =
        groceryHTML;


    document.getElementById("grocerySection").style.display =
        "block";
}


function addRecipeIngredients(
    recipe,
    servings,
    groceryItems
) {

    const scale =
        servings / recipe.baseServings;


    recipe.ingredients.forEach(function (ingredient) {

        const key =
            ingredient.name.toLowerCase() +
            "-" +
            ingredient.unit;


        if (!groceryItems[key]) {

            groceryItems[key] = {
                name: ingredient.name,
                amount: 0,
                unit: ingredient.unit
            };
        }


        groceryItems[key].amount +=
            ingredient.amount * scale;
    });
}


function formatAmount(amount) {

    if (Number.isInteger(amount)) {
        return amount;
    }

    return Number(amount.toFixed(1));
}
