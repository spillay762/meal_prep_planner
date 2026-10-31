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
            "Heat a large pan and cook the chicken until browned and fully cooked.",
            "Add the bell peppers and broccoli and cook until slightly tender.",
            "Add garlic, soy sauce and sesame oil.",
            "Stir everything together and cook for another 2 to 3 minutes.",
            "Divide the rice and chicken stir-fry evenly between your meal prep containers."
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
            "Cook the chicken in a large pan until fully cooked.",
            "Add the spinach and tomatoes and cook for 2 to 3 minutes.",
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
            "Divide rice between containers.",
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
            "Add ginger and garlic and cook for 1 minute.",
            "Add tomatoes and spices.",
            "Add the beef and mix well.",
            "Add coconut milk and a little water if needed.",
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
            "Add garlic and cook for about 1 minute.",
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
            "Cook until the tomatoes break down.",
            "Add peas.",
            "Simmer for approximately 10 minutes.",
            "Serve with rice, naan or roti."
        ]
    }

];



let selectedLunch;
let selectedDinner;



const generateButton =
    document.getElementById("generateButton");



generateButton.addEventListener("click", function () {

    const servings =
        Number(document.getElementById("servings").value);


    selectedLunch =
        lunchMeals[Math.floor(Math.random() * lunchMeals.length)];


    selectedDinner =
        dinnerMeals[Math.floor(Math.random() * dinnerMeals.length)];



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



    createGroceryList(servings);

});



document
    .getElementById("lunchRecipeButton")
    .addEventListener("click", function () {

        const servings =
            Number(document.getElementById("servings").value);

        showRecipe(
            selectedLunch,
            servings,
            "lunchRecipe"
        );

    });



document
    .getElementById("dinnerRecipeButton")
    .addEventListener("click", function () {

        const servings =
            Number(document.getElementById("servings").value);

        showRecipe(
            selectedDinner,
            servings,
            "dinnerRecipe"
        );

    });



function showRecipe(recipe, servings, elementId) {

    const scale =
        servings / recipe.baseServings;


    let ingredientHTML =
        "<h3>Ingredients</h3><ul>";


    recipe.ingredients.forEach(function (ingredient) {

        let scaledAmount =
            ingredient.amount * scale;


        if (scaledAmount % 1 !== 0) {
            scaledAmount =
                scaledAmount.toFixed(1);
        }


        ingredientHTML +=
            "<li>" +
            scaledAmount +
            " " +
            ingredient.unit +
            " " +
            ingredient.name +
            "</li>";

    });


    ingredientHTML += "</ul>";



    let instructionHTML =
        "<h3>Instructions</h3><ol>";


    recipe.instructions.forEach(function (step) {

        instructionHTML +=
            "<li>" +
            step +
            "</li>";

    });


    instructionHTML += "</ol>";



    const recipeBox =
        document.getElementById(elementId);


    recipeBox.innerHTML =
        ingredientHTML +
        instructionHTML;


    recipeBox.style.display = "block";

}



function createGroceryList(servings) {

    const groceryItems = {};

    const allIngredients = [
        ...selectedLunch.ingredients,
        ...selectedDinner.ingredients
    ];



    allIngredients.forEach(function (ingredient) {

        let scale;


        if (
            selectedLunch.ingredients.includes(ingredient)
        ) {

            scale =
                servings / selectedLunch.baseServings;

        }

        else {

            scale =
                servings / selectedDinner.baseServings;

        }



        const key =
            ingredient.name +
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



    let groceryHTML = "<ul>";


    Object.values(groceryItems)
        .forEach(function (item) {

            let amount = item.amount;


            if (amount % 1 !== 0) {

                amount =
                    amount.toFixed(1);

            }


            groceryHTML +=

                "<li>" +

                "<input type='checkbox'> " +

                amount +
                " " +
                item.unit +
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
