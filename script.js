// =====================================================
// LUNCH DATABASE
// =====================================================

const lunchMeals = [

    {
        name: "Soy Garlic Chicken Stir-Fry",
        baseServings: 4,

        ingredients: [
            { name: "Chicken breast", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Broccoli", amount: 2, unit: "cups" },
            { name: "Bell pepper", amount: 1, unit: "" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Garlic cloves", amount: 4, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Cornstarch", amount: 1, unit: "tbsp" },
            { name: "Cooking oil", amount: 1, unit: "tbsp" },
            { name: "Green onions", amount: null, unit: "" }
        ],

        instructions: [
            "Cut the chicken into pieces and season lightly.",
            "Sear the chicken in cooking oil until browned and fully cooked.",
            "Add broccoli, bell pepper and carrots and stir-fry until tender-crisp.",
            "Add garlic, soy sauce and sesame oil.",
            "Mix the cornstarch with a little water and add it to the pan.",
            "Cook until the sauce thickens and becomes glossy.",
            "Serve over cooked rice and top with green onions."
        ]
    },

    {
        name: "Chicken Teriyaki Rice Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Broccoli", amount: 2, unit: "cups" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Honey", amount: 2, unit: "tbsp" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Cornstarch", amount: 1, unit: "tsp" },
            { name: "Water", amount: 0.5, unit: "cup" }
        ],

        instructions: [
            "Cook the chicken until browned and fully cooked.",
            "Mix soy sauce, honey, garlic, ginger and water.",
            "Pour the sauce over the chicken.",
            "Mix cornstarch with a little water and add it to the pan.",
            "Simmer until the sauce thickens.",
            "Steam or cook the broccoli and carrots.",
            "Serve the chicken and vegetables over rice."
        ]
    },

    {
        name: "Chicken Fajita Burrito Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Corn", amount: 1, unit: "cup" },
            { name: "Avocado", amount: 1, unit: "" },
            { name: "Salsa", amount: 1, unit: "cup" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Lime", amount: 1, unit: "" },
            { name: "Paprika", amount: null, unit: "" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Garlic powder", amount: null, unit: "" }
        ],

        instructions: [
            "Season chicken with paprika, cumin and garlic powder.",
            "Cook until browned and fully cooked.",
            "Sauté the peppers and onion.",
            "Divide rice between meal-prep containers.",
            "Add chicken, peppers, onion and corn.",
            "Top with salsa, avocado and lettuce.",
            "Finish with fresh lime."
        ]
    },

    {
        name: "Chicken Pesto Pasta",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Dry pasta", amount: 320, unit: "g" },
            { name: "Pesto", amount: 0.5, unit: "cup" },
            { name: "Spinach", amount: 2, unit: "cups" },
            { name: "Cherry tomatoes", amount: 1.5, unit: "cups" },
            { name: "Parmesan", amount: 0.25, unit: "cup" },
            { name: "Olive oil", amount: 1, unit: "tbsp" }
        ],

        instructions: [
            "Cook pasta until al dente.",
            "Season and cook the chicken until fully cooked.",
            "Slice the chicken.",
            "Toss the pasta with pesto, spinach and cherry tomatoes.",
            "Add the chicken.",
            "Top with Parmesan.",
            "Divide between containers."
        ]
    },

    {
        name: "Chicken Shawarma Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken thighs or breast", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Cucumber", amount: 1, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Greek yogurt", amount: 1, unit: "cup" },
            { name: "Garlic cloves", amount: 2, unit: "" },
            { name: "Lemon", amount: 1, unit: "" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Paprika", amount: null, unit: "" },
            { name: "Coriander", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" }
        ],

        instructions: [
            "Coat chicken with shawarma spices, lemon and a little oil.",
            "Cook until browned and fully cooked.",
            "Slice the cooked chicken.",
            "Mix Greek yogurt and garlic for the sauce.",
            "Divide rice between containers.",
            "Add chicken, cucumber, tomato and lettuce.",
            "Serve with the yogurt-garlic sauce."
        ]
    },

    {
        name: "Chicken Fried Rice with Egg",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 500, unit: "g" },
            { name: "Cooked cold rice", amount: 4, unit: "cups" },
            { name: "Eggs", amount: 4, unit: "" },
            { name: "Peas", amount: 1, unit: "cup" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Green onions", amount: 4, unit: "" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" }
        ],

        instructions: [
            "Dice and cook the chicken, then set aside.",
            "Scramble the eggs and set aside.",
            "Stir-fry the carrots, peas and garlic.",
            "Add the cold rice and stir-fry over high heat.",
            "Return the chicken to the pan.",
            "Add soy sauce and sesame oil.",
            "Fold in the eggs and green onions."
        ]
    },

    {
        name: "Korean Beef Rice Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Lean ground beef", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Honey", amount: 1.5, unit: "tbsp" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Cucumber", amount: 1, unit: "" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Green onions", amount: null, unit: "" }
        ],

        instructions: [
            "Brown the beef with garlic and ginger.",
            "Add soy sauce, honey and sesame oil.",
            "Cook until the sauce coats the beef.",
            "Divide rice between containers.",
            "Top with beef, cucumber and carrots.",
            "Garnish with green onions."
        ]
    },

    {
        name: "Beef & Broccoli Stir-Fry",
        baseServings: 4,

        ingredients: [
            { name: "Beef strips", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Broccoli", amount: 4, unit: "cups" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Cornstarch", amount: 1, unit: "tbsp" },
            { name: "Water", amount: 0.5, unit: "cup" },
            { name: "Cooking oil", amount: 1, unit: "tbsp" }
        ],

        instructions: [
            "Thinly slice and sear the beef.",
            "Remove it from the pan.",
            "Stir-fry broccoli until tender-crisp.",
            "Add garlic, ginger and soy sauce.",
            "Mix cornstarch with water and add it.",
            "Return the beef.",
            "Cook until the sauce thickens.",
            "Serve over rice."
        ]
    },

    {
        name: "Mexican Beef & Corn Rice Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Lean ground beef", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Corn", amount: 1, unit: "cup" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Salsa", amount: 1, unit: "cup" },
            { name: "Shredded cheese", amount: 0.5, unit: "cup" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Paprika", amount: null, unit: "" },
            { name: "Garlic powder", amount: null, unit: "" }
        ],

        instructions: [
            "Brown the beef with cumin, paprika and garlic powder.",
            "Cook the peppers and corn.",
            "Divide rice between containers.",
            "Add beef, vegetables and corn.",
            "Top with salsa, cheese and lettuce."
        ]
    },

    {
        name: "Beef Bulgogi Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Thin beef strips", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Honey", amount: 1.5, unit: "tbsp" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Cucumber", amount: 1, unit: "" }
        ],

        instructions: [
            "Mix soy sauce, honey, sesame oil, garlic and ginger.",
            "Marinate the beef.",
            "Sear over high heat until cooked.",
            "Serve over rice.",
            "Top with carrots and cucumber."
        ]
    },

    {
        name: "Chicken Tikka Rice Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Greek yogurt", amount: 0.75, unit: "cup" },
            { name: "Lemon", amount: 1, unit: "" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Paprika", amount: null, unit: "" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Garam masala", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" },
            { name: "Cucumber", amount: 1, unit: "" }
        ],

        instructions: [
            "Mix yogurt, lemon, garlic, ginger and tikka spices.",
            "Coat the chicken and marinate if possible.",
            "Bake, air-fry or pan-cook until browned and fully cooked.",
            "Serve over rice.",
            "Add cucumber and yogurt sauce."
        ]
    },

    {
        name: "Greek Chicken Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Cooked rice or couscous", amount: 3, unit: "cups" },
            { name: "Cucumber", amount: 1, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Feta", amount: 0.5, unit: "cup" },
            { name: "Tzatziki", amount: 1, unit: "cup" },
            { name: "Lemon", amount: 1, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Oregano", amount: null, unit: "" },
            { name: "Olive oil", amount: null, unit: "" }
        ],

        instructions: [
            "Season chicken with lemon, garlic and oregano.",
            "Cook until fully cooked.",
            "Prepare rice or couscous.",
            "Divide between containers.",
            "Add cucumber, tomato, feta and chicken.",
            "Serve with tzatziki."
        ]
    },

    {
        name: "Mediterranean Chicken Couscous Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Dry couscous", amount: 2, unit: "cups" },
            { name: "Zucchini", amount: 1, unit: "" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Feta", amount: 0.5, unit: "cup" },
            { name: "Lemon", amount: 1, unit: "" },
            { name: "Parsley", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Olive oil", amount: null, unit: "" }
        ],

        instructions: [
            "Cook the couscous.",
            "Season and cook the chicken.",
            "Roast or sauté zucchini and peppers.",
            "Divide couscous between containers.",
            "Add chicken and vegetables.",
            "Top with feta, parsley and lemon."
        ]
    },

    {
        name: "Chicken Fajita Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Corn", amount: 1, unit: "cup" },
            { name: "Salsa", amount: 1, unit: "cup" },
            { name: "Lime", amount: 1, unit: "" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Paprika", amount: null, unit: "" },
            { name: "Garlic powder", amount: null, unit: "" }
        ],

        instructions: [
            "Season and cook the chicken.",
            "Sauté peppers and onion.",
            "Divide rice between containers.",
            "Add chicken, vegetables and corn.",
            "Top with salsa and lime."
        ]
    },

    {
        name: "Chicken Fajita Burrito",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Large tortillas", amount: 4, unit: "" },
            { name: "Cooked rice", amount: 2, unit: "cups" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Corn", amount: 1, unit: "cup" },
            { name: "Shredded cheese", amount: 1, unit: "cup" },
            { name: "Salsa", amount: 0.75, unit: "cup" },
            { name: "Fajita seasoning", amount: null, unit: "" }
        ],

        instructions: [
            "Cook the seasoned chicken.",
            "Sauté peppers and onions.",
            "Add rice, chicken, vegetables, corn, cheese and salsa to tortillas.",
            "Roll tightly.",
            "Toast lightly if desired."
        ]
    },

    {
        name: "Beef & Cheese Burrito",
        baseServings: 4,

        ingredients: [
            { name: "Lean ground beef", amount: 600, unit: "g" },
            { name: "Large tortillas", amount: 4, unit: "" },
            { name: "Cooked rice", amount: 2, unit: "cups" },
            { name: "Bell pepper", amount: 1, unit: "" },
            { name: "Corn", amount: 1, unit: "cup" },
            { name: "Shredded cheese", amount: 1, unit: "cup" },
            { name: "Salsa", amount: 0.75, unit: "cup" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Paprika", amount: null, unit: "" }
        ],

        instructions: [
            "Brown beef with cumin and paprika.",
            "Add rice, beef, peppers, corn, salsa and cheese to tortillas.",
            "Roll tightly.",
            "Toast in a pan if desired."
        ]
    },

    {
        name: "Chicken Caesar Wrap",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Large wraps", amount: 4, unit: "" },
            { name: "Romaine lettuce", amount: 4, unit: "cups" },
            { name: "Caesar dressing", amount: 0.5, unit: "cup" },
            { name: "Parmesan", amount: 0.5, unit: "cup" },
            { name: "Black pepper", amount: null, unit: "" }
        ],

        instructions: [
            "Cook and slice seasoned chicken.",
            "Toss lettuce lightly with Caesar dressing.",
            "Add chicken, lettuce and Parmesan to each wrap.",
            "Season with black pepper.",
            "Roll tightly."
        ]
    },

    {
        name: "Buffalo Chicken Wrap",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Wraps", amount: 4, unit: "" },
            { name: "Buffalo sauce", amount: 0.5, unit: "cup" },
            { name: "Lettuce", amount: 2, unit: "cups" },
            { name: "Carrot", amount: 1, unit: "" },
            { name: "Greek-yogurt ranch", amount: 0.75, unit: "cup" }
        ],

        instructions: [
            "Cook the chicken.",
            "Toss with buffalo sauce.",
            "Add chicken, lettuce and carrot to wraps.",
            "Add yogurt ranch sauce.",
            "Roll tightly."
        ]
    },

    {
        name: "Chicken Pesto Mozzarella Sandwich",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Whole-grain bread slices", amount: 8, unit: "" },
            { name: "Pesto", amount: 0.33, unit: "cup" },
            { name: "Mozzarella", amount: 200, unit: "g" },
            { name: "Tomato", amount: 1, unit: "" },
            { name: "Spinach", amount: 2, unit: "cups" }
        ],

        instructions: [
            "Cook and slice chicken.",
            "Spread pesto on bread.",
            "Layer chicken, mozzarella, spinach and tomato.",
            "Close the sandwiches.",
            "Toast if desired."
        ]
    },

    {
        name: "Turkey Avocado Club Sandwich",
        baseServings: 4,

        ingredients: [
            { name: "Sliced turkey", amount: 500, unit: "g" },
            { name: "Whole-grain bread slices", amount: 8, unit: "" },
            { name: "Avocado", amount: 1, unit: "" },
            { name: "Tomato", amount: 1, unit: "" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Cheese slices", amount: 4, unit: "" },
            { name: "Greek yogurt", amount: 0.25, unit: "cup" },
            { name: "Mustard", amount: 1, unit: "tbsp" }
        ],

        instructions: [
            "Mix Greek yogurt and mustard.",
            "Spread the sauce over the bread.",
            "Layer turkey, avocado, lettuce, tomato and cheese.",
            "Close and slice the sandwiches."
        ]
    },

    {
        name: "Chicken Parmesan Sandwich",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Buns", amount: 4, unit: "" },
            { name: "Marinara", amount: 1, unit: "cup" },
            { name: "Mozzarella", amount: 150, unit: "g" },
            { name: "Breadcrumbs", amount: 0.5, unit: "cup" },
            { name: "Parmesan", amount: 0.25, unit: "cup" },
            { name: "Egg", amount: 1, unit: "" },
            { name: "Italian seasoning", amount: null, unit: "" }
        ],

        instructions: [
            "Dip chicken in beaten egg.",
            "Coat with breadcrumbs, Parmesan and seasoning.",
            "Bake or air-fry until cooked.",
            "Top with marinara and mozzarella.",
            "Place inside buns.",
            "Toast until the cheese melts."
        ]
    },

    {
        name: "Healthy Beef Cheeseburger",
        baseServings: 4,

        ingredients: [
            { name: "Lean ground beef", amount: 600, unit: "g" },
            { name: "Burger buns", amount: 4, unit: "" },
            { name: "Cheese slices", amount: 4, unit: "" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Tomato", amount: 1, unit: "" },
            { name: "Onion", amount: 0.5, unit: "" },
            { name: "Greek yogurt", amount: 0.25, unit: "cup" },
            { name: "Mustard", amount: null, unit: "" },
            { name: "Garlic powder", amount: null, unit: "" }
        ],

        instructions: [
            "Form the beef into patties.",
            "Cook until done.",
            "Add cheese near the end.",
            "Mix yogurt, mustard and garlic powder for the sauce.",
            "Assemble burgers with lettuce, tomato and onion."
        ]
    },

    {
        name: "Chicken Burger with Garlic Yogurt Sauce",
        baseServings: 4,

        ingredients: [
            { name: "Ground chicken", amount: 600, unit: "g" },
            { name: "Burger buns", amount: 4, unit: "" },
            { name: "Greek yogurt", amount: 0.75, unit: "cup" },
            { name: "Garlic cloves", amount: 2, unit: "" },
            { name: "Lemon", amount: 0.5, unit: "" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Tomato", amount: null, unit: "" },
            { name: "Paprika", amount: null, unit: "" },
            { name: "Onion powder", amount: null, unit: "" }
        ],

        instructions: [
            "Season ground chicken and form patties.",
            "Cook until fully done.",
            "Mix yogurt, garlic and lemon.",
            "Assemble burgers with lettuce and tomato.",
            "Add garlic yogurt sauce."
        ]
    },

    {
        name: "Turkey Burger",
        baseServings: 4,

        ingredients: [
            { name: "Ground turkey", amount: 600, unit: "g" },
            { name: "Burger buns", amount: 4, unit: "" },
            { name: "Lettuce", amount: null, unit: "" },
            { name: "Tomato", amount: null, unit: "" },
            { name: "Greek yogurt", amount: 0.25, unit: "cup" },
            { name: "Mustard", amount: 1, unit: "tbsp" },
            { name: "Garlic powder", amount: null, unit: "" },
            { name: "Paprika", amount: null, unit: "" }
        ],

        instructions: [
            "Season ground turkey.",
            "Form patties and cook thoroughly.",
            "Mix yogurt and mustard.",
            "Assemble burgers with lettuce and tomato.",
            "Add the yogurt-mustard sauce."
        ]
    },

    {
        name: "Chicken Pad Thai",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 500, unit: "g" },
            { name: "Rice noodles", amount: 300, unit: "g" },
            { name: "Eggs", amount: 4, unit: "" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Bell pepper", amount: 1, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Limes", amount: 2, unit: "" },
            { name: "Honey", amount: 1.5, unit: "tbsp" },
            { name: "Peanuts", amount: 0.25, unit: "cup" },
            { name: "Green onions", amount: null, unit: "" }
        ],

        instructions: [
            "Cook noodles.",
            "Cook the chicken.",
            "Scramble the eggs.",
            "Stir-fry carrots and pepper.",
            "Mix soy sauce, lime juice and honey.",
            "Add noodles, chicken and eggs.",
            "Toss with sauce.",
            "Top with peanuts and green onions."
        ]
    },

    {
        name: "Beef Chow Mein",
        baseServings: 4,

        ingredients: [
            { name: "Beef strips", amount: 600, unit: "g" },
            { name: "Noodles", amount: 300, unit: "g" },
            { name: "Cabbage", amount: 2, unit: "cups" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Bell pepper", amount: 1, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 3, unit: "" }
        ],

        instructions: [
            "Cook noodles.",
            "Sear beef and set aside.",
            "Stir-fry cabbage, carrots and pepper.",
            "Add garlic.",
            "Return beef and add noodles.",
            "Add soy sauce and sesame oil.",
            "Toss well."
        ]
    },

    {
        name: "Sesame Chicken Noodle Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Noodles", amount: 300, unit: "g" },
            { name: "Broccoli", amount: 2, unit: "cups" },
            { name: "Bell pepper", amount: 1, unit: "" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Honey", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Sesame seeds", amount: null, unit: "" }
        ],

        instructions: [
            "Cook noodles and chicken separately.",
            "Stir-fry the vegetables.",
            "Mix soy sauce, sesame oil, garlic and honey.",
            "Add noodles and chicken.",
            "Toss everything with the sauce.",
            "Top with sesame seeds."
        ]
    },

    {
        name: "Deconstructed Chicken Quesadilla Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Bell peppers", amount: 2, unit: "" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Corn", amount: 1, unit: "cup" },
            { name: "Shredded cheese", amount: 1, unit: "cup" },
            { name: "Greek yogurt", amount: 0.75, unit: "cup" },
            { name: "Salsa", amount: 0.5, unit: "cup" },
            { name: "Lime", amount: 1, unit: "" },
            { name: "Paprika", amount: 1, unit: "tsp" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Garlic powder", amount: 1, unit: "tsp" },
            { name: "Chili powder", amount: 0.5, unit: "tsp" }
        ],

        instructions: [
            "Season chicken with paprika, cumin, garlic powder and chili powder.",
            "Cook the chicken.",
            "Sauté peppers and onions.",
            "Divide rice between containers.",
            "Add chicken, vegetables, corn and cheese.",
            "Mix yogurt, salsa and lime.",
            "Drizzle sauce over each bowl."
        ]
    },

    {
        name: "Saucy Korean Beef Egg Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Lean ground beef", amount: 600, unit: "g" },
            { name: "Eggs", amount: 4, unit: "" },
            { name: "Cooked rice", amount: 3, unit: "cups" },
            { name: "Cucumber", amount: 1, unit: "" },
            { name: "Carrots", amount: 2, unit: "" },
            { name: "Soy sauce", amount: 0.25, unit: "cup" },
            { name: "Honey", amount: 2, unit: "tbsp" },
            { name: "Sesame oil", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 3, unit: "" },
            { name: "Ginger", amount: 1, unit: "tsp" },
            { name: "Green onions", amount: 2, unit: "" },
            { name: "Cornstarch", amount: 1, unit: "tsp" },
            { name: "Water", amount: 2, unit: "tbsp" }
        ],

        instructions: [
            "Brown beef with garlic and ginger.",
            "Add soy sauce, honey and sesame oil.",
            "Mix cornstarch with water and add it.",
            "Cook until glossy and saucy.",
            "Cook the eggs.",
            "Serve beef over rice.",
            "Add egg, cucumber and carrots.",
            "Top with green onions."
        ]
    },

    {
        name: "Mediterranean Chicken & Couscous Bowl",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 600, unit: "g" },
            { name: "Dry couscous", amount: 2, unit: "cups" },
            { name: "Cucumber", amount: 1, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Roasted pepper", amount: 1, unit: "" },
            { name: "Feta", amount: 0.5, unit: "cup" },
            { name: "Greek yogurt", amount: 0.75, unit: "cup" },
            { name: "Lemon", amount: 1, unit: "" },
            { name: "Parsley", amount: null, unit: "" }
        ],

        instructions: [
            "Cook the couscous.",
            "Cook the chicken.",
            "Chop cucumber, tomatoes and roasted pepper.",
            "Mix yogurt with lemon.",
            "Divide couscous between containers.",
            "Add chicken and vegetables.",
            "Top with feta and parsley.",
            "Serve with yogurt-lemon sauce."
        ]
    }

];


// =====================================================
// DINNER DATABASE
// =====================================================

const dinnerMeals = [

    {
        name: "Kerala Chicken Curry",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Garlic cloves", amount: 4, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Curry leaves", amount: 2, unit: "sprigs" },
            { name: "Coconut milk", amount: 1, unit: "cup" },
            { name: "Coriander powder", amount: 1, unit: "tbsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Salt", amount: null, unit: "" },
            { name: "Cooking oil", amount: null, unit: "" }
        ],

        instructions: [
            "Sauté onion, ginger, garlic and curry leaves.",
            "Add spices and tomatoes.",
            "Add chicken and a little water.",
            "Simmer until the chicken is tender.",
            "Finish with coconut milk if desired.",
            "Serve with rice, appam or roti."
        ]
    },

    {
        name: "Kerala Beef Curry",
        baseServings: 4,

        ingredients: [
            { name: "Stewing beef", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coriander powder", amount: 1.5, unit: "tbsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Black pepper", amount: null, unit: "" },
            { name: "Cooking oil", amount: null, unit: "" }
        ],

        instructions: [
            "Pressure-cook the beef with spices until tender.",
            "Sauté onions, curry leaves, ginger and garlic separately.",
            "Add tomatoes.",
            "Add the cooked beef.",
            "Simmer until the curry becomes rich and thick."
        ]
    },

    {
        name: "Kerala Beef Ularthiyathu",
        baseServings: 4,

        ingredients: [
            { name: "Beef", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Coconut pieces", amount: 0.5, unit: "cup" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Black pepper", amount: 1.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Chili powder", amount: null, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Pressure-cook the beef with spices until tender.",
            "Fry coconut pieces, onions, curry leaves and black pepper.",
            "Add the cooked beef.",
            "Roast until dark, dry and deeply caramelized."
        ]
    },

    {
        name: "Kerala Fish Curry with Kudampuli",
        baseServings: 4,

        ingredients: [
            { name: "Firm fish", amount: 700, unit: "g" },
            { name: "Kudampuli pieces", amount: 4, unit: "" },
            { name: "Shallots", amount: 8, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Chili powder", amount: 2, unit: "tbsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Water", amount: 2, unit: "cups" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Simmer ginger, garlic, shallots, curry leaves and spices with kudampuli.",
            "Add the fish pieces.",
            "Cook gently until the fish is tender.",
            "Rest before serving so the flavors deepen."
        ]
    },

    {
        name: "Kerala Fish Molee",
        baseServings: 4,

        ingredients: [
            { name: "Fish", amount: 700, unit: "g" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Tomato", amount: 1, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coconut milk", amount: 2, unit: "cups" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Black pepper", amount: null, unit: "" },
            { name: "Coconut oil", amount: 1, unit: "tbsp" }
        ],

        instructions: [
            "Lightly sear the fish.",
            "Cook onion, ginger, green chili and curry leaves.",
            "Add coconut milk.",
            "Return the fish to the pan.",
            "Add tomato.",
            "Simmer gently until cooked."
        ]
    },

    {
        name: "Kerala Prawn Curry",
        baseServings: 4,

        ingredients: [
            { name: "Shrimp", amount: 700, unit: "g" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Garlic cloves", amount: 4, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coconut milk", amount: 1.5, unit: "cups" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Salt", amount: null, unit: "" }
        ],

        instructions: [
            "Sauté onion, ginger, garlic and curry leaves.",
            "Add tomatoes and spices.",
            "Add coconut milk.",
            "Add shrimp near the end.",
            "Simmer only until the shrimp are cooked."
        ]
    },

    {
        name: "Chicken Ishtu",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Potatoes", amount: 3, unit: "" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Green chilies", amount: 3, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coconut milk", amount: 2, unit: "cups" },
            { name: "Cardamom pods", amount: 4, unit: "" },
            { name: "Cloves", amount: 4, unit: "" },
            { name: "Cinnamon stick", amount: 1, unit: "" },
            { name: "Black pepper", amount: null, unit: "" }
        ],

        instructions: [
            "Simmer chicken, potatoes and onion with ginger, chili and whole spices.",
            "Cook until the chicken and potatoes are tender.",
            "Add coconut milk near the end.",
            "Cook gently until creamy and aromatic."
        ]
    },

    {
        name: "Kerala Pepper Chicken",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Curry leaves", amount: 2, unit: "sprigs" },
            { name: "Black pepper", amount: 2, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tbsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Green chili", amount: 1, unit: "" },
            { name: "Coconut oil", amount: 1, unit: "tbsp" },
            { name: "Salt", amount: null, unit: "" }
        ],

        instructions: [
            "Marinate chicken with turmeric, pepper and salt.",
            "Sauté onion, ginger, garlic and curry leaves until golden.",
            "Add spices and chicken.",
            "Cook until the chicken is tender.",
            "Finish uncovered until the pepper masala coats the chicken."
        ]
    },

    {
        name: "Chicken Roast Kerala Style",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Onions", amount: 3, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coriander powder", amount: 1, unit: "tbsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Black pepper", amount: null, unit: "" }
        ],

        instructions: [
            "Cook the chicken with spices until nearly tender.",
            "Fry onion, tomato and curry leaves separately.",
            "Add the chicken.",
            "Roast until the masala becomes thick and coats the meat."
        ]
    },

    {
        name: "Malabar Chicken Curry",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Coconut milk", amount: 1.5, unit: "cups" },
            { name: "Coriander powder", amount: 1.5, unit: "tbsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" }
        ],

        instructions: [
            "Sauté onion, curry leaves, ginger and garlic.",
            "Add roasted spices and tomatoes.",
            "Add chicken and coconut milk.",
            "Simmer until tender."
        ]
    },

    {
        name: "Chicken Karahi",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Tomatoes", amount: 5, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Garam masala", amount: 0.5, unit: "tsp" },
            { name: "Cilantro", amount: null, unit: "" }
        ],

        instructions: [
            "Cook chicken with tomatoes, garlic and ginger.",
            "Add green chilies and spices.",
            "Cook uncovered until the tomatoes reduce into a thick masala.",
            "Finish with cilantro and fresh ginger if desired."
        ]
    },

    {
        name: "Beef Nihari",
        baseServings: 4,

        ingredients: [
            { name: "Beef shank or stewing beef", amount: 900, unit: "g" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Fennel", amount: 1, unit: "tsp" },
            { name: "Coriander", amount: 1, unit: "tsp" },
            { name: "Chili powder", amount: 0.5, unit: "tsp" },
            { name: "Flour", amount: 2, unit: "tbsp" },
            { name: "Cilantro", amount: null, unit: "" },
            { name: "Lemon", amount: null, unit: "" }
        ],

        instructions: [
            "Brown the beef with spices.",
            "Add water.",
            "Slowly simmer until the beef is very tender.",
            "Mix flour with water and add to thicken slightly.",
            "Finish with ginger, cilantro and lemon."
        ]
    },

    {
        name: "Pakistani Beef Keema",
        baseServings: 4,

        ingredients: [
            { name: "Lean ground beef", amount: 700, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Peas", amount: 1, unit: "cup" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Garam masala", amount: null, unit: "" }
        ],

        instructions: [
            "Brown ground beef with onion, ginger and garlic.",
            "Add tomatoes and spices.",
            "Add peas if desired.",
            "Simmer until thick.",
            "Serve with rice or roti."
        ]
    },

    {
        name: "Chicken Keema with Potatoes",
        baseServings: 4,

        ingredients: [
            { name: "Ground chicken", amount: 700, unit: "g" },
            { name: "Potatoes", amount: 3, unit: "" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Cumin", amount: null, unit: "" },
            { name: "Coriander powder", amount: null, unit: "" },
            { name: "Chili powder", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" },
            { name: "Garam masala", amount: null, unit: "" }
        ],

        instructions: [
            "Brown ground chicken with onions and spices.",
            "Add diced potatoes and tomatoes.",
            "Cover and cook until the potatoes are tender.",
            "Continue cooking until the curry becomes thick."
        ]
    },

    {
        name: "Kerala Egg Curry",
        baseServings: 4,

        ingredients: [
            { name: "Eggs", amount: 8, unit: "" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coconut milk", amount: 1.5, unit: "cups" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: null, unit: "" }
        ],

        instructions: [
            "Boil the eggs.",
            "Prepare a curry with onion, tomato, ginger, garlic and spices.",
            "Add coconut milk.",
            "Add the boiled eggs.",
            "Simmer until the sauce thickens."
        ]
    },

    {
        name: "Egg Roast Kerala Style",
        baseServings: 4,

        ingredients: [
            { name: "Eggs", amount: 8, unit: "" },
            { name: "Onions", amount: 3, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Black pepper", amount: null, unit: "" }
        ],

        instructions: [
            "Boil the eggs.",
            "Slowly caramelize onions with tomato, curry leaves and spices.",
            "Cook until dark and thick.",
            "Add the eggs.",
            "Coat thoroughly in the masala."
        ]
    },

    {
        name: "Prawn Masala Kerala Style",
        baseServings: 4,

        ingredients: [
            { name: "Shrimp", amount: 700, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Black pepper", amount: 1, unit: "tsp" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Sauté onion, tomato, ginger, garlic and curry leaves until thick.",
            "Add spices.",
            "Add shrimp.",
            "Cook quickly until the prawns are just cooked and coated in masala."
        ]
    },

    {
        name: "Chicken Chettinad",
        baseServings: 4,

        ingredients: [
            { name: "Chicken", amount: 800, unit: "g" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Coriander seeds", amount: 1, unit: "tbsp" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Fennel", amount: 1, unit: "tsp" },
            { name: "Black pepper", amount: 1, unit: "tsp" },
            { name: "Dried chilies", amount: null, unit: "" },
            { name: "Cinnamon", amount: null, unit: "" },
            { name: "Coconut", amount: null, unit: "" }
        ],

        instructions: [
            "Toast the whole spices and grind them.",
            "Cook onion, tomato, ginger and garlic.",
            "Add chicken and ground spices.",
            "Simmer until the chicken is tender.",
            "Cook until the sauce becomes rich and thick."
        ]
    },

    {
        name: "Kerala Meen Pollichathu",
        baseServings: 4,

        ingredients: [
            { name: "Fish fillets or steaks", amount: 4, unit: "" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Chili powder", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Black pepper", amount: 1, unit: "tsp" },
            { name: "Lemon", amount: 1, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Marinate fish with chili powder, turmeric and salt.",
            "Lightly fry the fish.",
            "Prepare onion-tomato masala with curry leaves.",
            "Coat the fish with masala.",
            "Wrap in banana leaf or foil.",
            "Cook until fragrant and tender."
        ]
    },

    {
        name: "Beans Thoran",
        baseServings: 4,

        ingredients: [
            { name: "Green beans", amount: 500, unit: "g" },
            { name: "Grated coconut", amount: 1, unit: "cup" },
            { name: "Small onion", amount: 1, unit: "" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Mustard seeds", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Finely chop the green beans.",
            "Stir-fry mustard seeds, curry leaves and chilies.",
            "Add the beans.",
            "Add grated coconut.",
            "Cook until tender but slightly crisp."
        ]
    },

    {
        name: "Cabbage Thoran",
        baseServings: 4,

        ingredients: [
            { name: "Medium cabbage", amount: 1, unit: "" },
            { name: "Grated coconut", amount: 1, unit: "cup" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Mustard seeds", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Sauté mustard seeds, curry leaves and green chili.",
            "Add shredded cabbage and turmeric.",
            "Stir in coconut.",
            "Cook until just tender."
        ]
    },

    {
        name: "Beetroot Thoran",
        baseServings: 4,

        ingredients: [
            { name: "Medium beetroots", amount: 4, unit: "" },
            { name: "Grated coconut", amount: 0.75, unit: "cup" },
            { name: "Small onion", amount: 1, unit: "" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Mustard seeds", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Sauté mustard seeds and curry leaves.",
            "Add finely chopped beetroot, turmeric and salt.",
            "Cover and cook until tender.",
            "Finish with grated coconut."
        ]
    },

    {
        name: "Carrot & Beans Thoran",
        baseServings: 4,

        ingredients: [
            { name: "Carrots", amount: 3, unit: "" },
            { name: "Green beans", amount: 300, unit: "g" },
            { name: "Grated coconut", amount: 0.75, unit: "cup" },
            { name: "Small onion", amount: 1, unit: "" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Mustard seeds", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Sauté mustard seeds, curry leaves and chilies.",
            "Add diced carrots and green beans.",
            "Cook until tender.",
            "Stir in grated coconut at the end."
        ]
    },

    {
        name: "Avial",
        baseServings: 4,

        ingredients: [
            { name: "Mixed vegetables", amount: 4, unit: "cups" },
            { name: "Grated coconut", amount: 1, unit: "cup" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Yogurt", amount: 0.5, unit: "cup" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" }
        ],

        instructions: [
            "Cook mixed vegetables with turmeric and a little water.",
            "Blend or crush coconut, cumin and green chili.",
            "Add the coconut mixture to the vegetables.",
            "Finish with yogurt.",
            "Add curry leaves and coconut oil."
        ]
    },

    {
        name: "Kerala Parippu Curry",
        baseServings: 4,

        ingredients: [
            { name: "Moong dal", amount: 1.5, unit: "cups" },
            { name: "Grated coconut", amount: 1, unit: "cup" },
            { name: "Cumin seeds", amount: 1, unit: "tsp" },
            { name: "Green chilies", amount: 2, unit: "" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Mustard seeds", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Dried chilies", amount: 2, unit: "" },
            { name: "Coconut oil", amount: null, unit: "" }
        ],

        instructions: [
            "Cook moong dal until soft.",
            "Blend coconut, cumin and green chili.",
            "Stir the coconut mixture into the dal.",
            "Temper mustard seeds, curry leaves and dried chili in coconut oil.",
            "Pour the tempering over the dal."
        ]
    },

    {
        name: "Dal Tadka",
        baseServings: 4,

        ingredients: [
            { name: "Toor or moong dal", amount: 1.5, unit: "cups" },
            { name: "Onion", amount: 1, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Turmeric", amount: 0.5, unit: "tsp" },
            { name: "Chili powder", amount: 0.5, unit: "tsp" },
            { name: "Garam masala", amount: 1, unit: "tsp" },
            { name: "Ghee", amount: null, unit: "" },
            { name: "Cilantro", amount: null, unit: "" }
        ],

        instructions: [
            "Cook the lentils until creamy.",
            "Sauté onion, tomato, garlic and spices.",
            "Stir the mixture into the dal.",
            "Prepare a hot tempering of ghee, cumin, garlic and chili.",
            "Pour over the dal.",
            "Finish with cilantro."
        ]
    },

    {
        name: "Dal Makhani",
        baseServings: 4,

        ingredients: [
            { name: "Whole urad dal", amount: 1.5, unit: "cups" },
            { name: "Tomato puree", amount: 1.5, unit: "cups" },
            { name: "Ginger", amount: 1, unit: "tbsp" },
            { name: "Garlic cloves", amount: 5, unit: "" },
            { name: "Butter", amount: 2, unit: "tbsp" },
            { name: "Cream", amount: 0.5, unit: "cup" },
            { name: "Garam masala", amount: null, unit: "" },
            { name: "Chili powder", amount: null, unit: "" },
            { name: "Salt", amount: null, unit: "" }
        ],

        instructions: [
            "Slow-cook the urad dal until very soft.",
            "Add tomato puree, ginger and garlic.",
            "Add butter.",
            "Simmer until thick.",
            "Stir in cream.",
            "Finish with garam masala."
        ]
    },

    {
        name: "Dal Gosht",
        baseServings: 4,

        ingredients: [
            { name: "Beef", amount: 600, unit: "g" },
            { name: "Toor or chana dal", amount: 1, unit: "cup" },
            { name: "Onions", amount: 2, unit: "" },
            { name: "Tomatoes", amount: 2, unit: "" },
            { name: "Ginger", amount: null, unit: "" },
            { name: "Garlic", amount: null, unit: "" },
            { name: "Cumin", amount: 1, unit: "tsp" },
            { name: "Coriander powder", amount: 1, unit: "tsp" },
            { name: "Chili powder", amount: null, unit: "" },
            { name: "Turmeric", amount: null, unit: "" },
            { name: "Garam masala", amount: null, unit: "" }
        ],

        instructions: [
            "Cook the lentils until soft.",
            "Separately cook beef with onion, tomato and spices.",
            "Combine the lentils and beef.",
            "Simmer until the beef is tender.",
            "Continue cooking until the dal is rich and thick."
        ]
    },

    {
        name: "Kerala Sambar",
        baseServings: 4,

        ingredients: [
            { name: "Toor dal", amount: 1.5, unit: "cups" },
            { name: "Carrot", amount: 1, unit: "" },
            { name: "Potato", amount: 1, unit: "" },
            { name: "Pumpkin", amount: 1, unit: "cup" },
            { name: "Eggplant", amount: 1, unit: "cup" },
            { name: "Tomato", amount: 1, unit: "" },
            { name: "Sambar powder", amount: 2, unit: "tbsp" },
            { name: "Tamarind", amount: null, unit: "" },
            { name: "Mustard seeds", amount: null, unit: "" },
            { name: "Curry leaves", amount: null, unit: "" },
            { name: "Dried chilies", amount: null, unit: "" }
        ],

        instructions: [
            "Cook toor dal until soft.",
            "Simmer vegetables with tamarind and sambar powder.",
            "Combine the vegetables with the cooked dal.",
            "Temper mustard seeds, curry leaves and dried chilies.",
            "Pour the tempering over the sambar."
        ]
    }

];


// =====================================================
// SELECTED MEALS
// =====================================================

let selectedLunch = null;
let selectedDinner = null;


// =====================================================
// BUTTON REFERENCES
// =====================================================

const generateButton =
    document.getElementById("generateButton");

const newLunchButton =
    document.getElementById("newLunchButton");

const newDinnerButton =
    document.getElementById("newDinnerButton");


// =====================================================
// GENERATE BOTH
// =====================================================

generateButton.addEventListener("click", function () {

    const servings = getServings();

    if (!servings) {
        return;
    }

    selectedLunch =
        getRandomRecipe(lunchMeals);

    selectedDinner =
        getRandomRecipe(dinnerMeals);

    updateLunch(servings);

    updateDinner(servings);

    showMealButtons();

    createGroceryList(servings);
});


// =====================================================
// NEW LUNCH
// =====================================================

newLunchButton.addEventListener("click", function () {

    const servings = getServings();

    if (!servings) {
        return;
    }

    const previousLunch =
        selectedLunch;

    do {

        selectedLunch =
            getRandomRecipe(lunchMeals);

    } while (
        lunchMeals.length > 1 &&
        selectedLunch === previousLunch
    );

    updateLunch(servings);

    createGroceryList(servings);
});


// =====================================================
// NEW DINNER
// =====================================================

newDinnerButton.addEventListener("click", function () {

    const servings = getServings();

    if (!servings) {
        return;
    }

    const previousDinner =
        selectedDinner;

    do {

        selectedDinner =
            getRandomRecipe(dinnerMeals);

    } while (
        dinnerMeals.length > 1 &&
        selectedDinner === previousDinner
    );

    updateDinner(servings);

    createGroceryList(servings);
});


// =====================================================
// GET SERVINGS
// =====================================================

function getServings() {

    const servings =
        Number(
            document.getElementById("servings").value
        );

    if (!servings || servings < 1) {

        alert(
            "Please enter at least 1 serving."
        );

        return null;
    }

    return servings;
}


// =====================================================
// RANDOM RECIPE
// =====================================================

function getRandomRecipe(recipeList) {

    return recipeList[
        Math.floor(
            Math.random() *
            recipeList.length
        )
    ];
}


// =====================================================
// UPDATE LUNCH DISPLAY
// =====================================================

function updateLunch(servings) {

    document.getElementById("lunchMeal").textContent =
        selectedLunch.name;

    document.getElementById("lunchRecipe").style.display =
        "none";

    document.getElementById("lunchRecipeButton").textContent =
        "View Lunch Recipe";
}


// =====================================================
// UPDATE DINNER DISPLAY
// =====================================================

function updateDinner(servings) {

    document.getElementById("dinnerMeal").textContent =
        selectedDinner.name;

    document.getElementById("dinnerRecipe").style.display =
        "none";

    document.getElementById("dinnerRecipeButton").textContent =
        "View Dinner Recipe";
}

// =====================================================
// SHOW BUTTONS
// =====================================================

function showMealButtons() {

    document.getElementById("lunchRecipeButton").style.display =
        "inline-block";

    document.getElementById("newLunchButton").style.display =
        "inline-block";

    document.getElementById("dinnerRecipeButton").style.display =
        "inline-block";

    document.getElementById("newDinnerButton").style.display =
        "inline-block";
}


// =====================================================
// VIEW LUNCH
// =====================================================

document
    .getElementById("lunchRecipeButton")
    .addEventListener("click", function () {

        if (!selectedLunch) {
            return;
        }

        const servings =
            getServings();

        if (!servings) {
            return;
        }

        toggleRecipe(
            selectedLunch,
            servings,
            "lunchRecipe",
            "lunchRecipeButton",
            "Lunch"
        );
    });


// =====================================================
// VIEW DINNER
// =====================================================

document
    .getElementById("dinnerRecipeButton")
    .addEventListener("click", function () {

        if (!selectedDinner) {
            return;
        }

        const servings =
            getServings();

        if (!servings) {
            return;
        }

        toggleRecipe(
            selectedDinner,
            servings,
            "dinnerRecipe",
            "dinnerRecipeButton",
            "Dinner"
        );
    });


// =====================================================
// SHOW / HIDE RECIPE
// =====================================================

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


    if (
        recipeBox.style.display === "block"
    ) {

        recipeBox.style.display =
            "none";

        button.textContent =
            "View " +
            mealType +
            " Recipe";

        return;
    }


    showRecipe(
        recipe,
        servings,
        elementId
    );

    button.textContent =
        "Hide " +
        mealType +
        " Recipe";
}


// =====================================================
// SHOW RECIPE
// =====================================================

function showRecipe(
    recipe,
    servings,
    elementId
) {

    const scale =
        servings /
        recipe.baseServings;


    let html =
        "<h3>Ingredients</h3>";

    html += "<ul>";


    recipe.ingredients.forEach(
        function (ingredient) {

            html += "<li>";


            if (
                ingredient.amount === null
            ) {

                html +=
                    ingredient.name +
                    " - as needed";

            } else {

                const scaledAmount =
                    formatAmount(
                        ingredient.amount *
                        scale
                    );

                html +=
                    scaledAmount;

                if (
                    ingredient.unit
                ) {

                    html +=
                        " " +
                        ingredient.unit;
                }

                html +=
                    " " +
                    ingredient.name;
            }


            html += "</li>";
        }
    );


    html += "</ul>";


    html +=
        "<h3>Cooking Instructions</h3>";

    html += "<ol>";


    recipe.instructions.forEach(
        function (step) {

            html +=
                "<li>" +
                step +
                "</li>";
        }
    );


    html += "</ol>";


    const recipeBox =
        document.getElementById(
            elementId
        );


    recipeBox.innerHTML =
        html;

    recipeBox.style.display =
        "block";
}


// =====================================================
// GROCERY LIST
// =====================================================

function createGroceryList(servings) {

    if (
        !selectedLunch ||
        !selectedDinner
    ) {
        return;
    }


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


    let groceryHTML =
        "<ul>";


    Object.values(groceryItems)
        .sort(function (a, b) {

            return a.name.localeCompare(
                b.name
            );

        })
        .forEach(function (item) {

            groceryHTML +=
                "<li>";

            groceryHTML +=
                "<input type='checkbox'> ";


            if (
                item.amount === null
            ) {

                groceryHTML +=
                    item.name +
                    " - as needed";

            } else {

                const amount =
                    formatAmount(
                        item.amount
                    );


                groceryHTML +=
                    amount;


                if (item.unit) {

                    groceryHTML +=
                        " " +
                        item.unit;
                }


                groceryHTML +=
                    " " +
                    item.name;
            }


            groceryHTML +=
                "</li>";
        });


    groceryHTML +=
        "</ul>";


    document.getElementById(
        "groceryList"
    ).innerHTML =
        groceryHTML;


    document.getElementById(
        "grocerySection"
    ).style.display =
        "block";
}


// =====================================================
// ADD INGREDIENTS TO GROCERY LIST
// =====================================================

function addRecipeIngredients(
    recipe,
    servings,
    groceryItems
) {

    const scale =
        servings /
        recipe.baseServings;


    recipe.ingredients.forEach(
        function (ingredient) {

            const key =
                ingredient.name
                    .toLowerCase()
                    .trim() +
                "-" +
                ingredient.unit;


            if (
                !groceryItems[key]
            ) {

                groceryItems[key] = {

                    name:
                        ingredient.name,

                    amount:
                        ingredient.amount === null
                            ? null
                            : 0,

                    unit:
                        ingredient.unit
                };
            }


            if (
                ingredient.amount !== null
            ) {

                if (
                    groceryItems[key]
                        .amount === null
                ) {

                    groceryItems[key]
                        .amount = 0;
                }


                groceryItems[key]
                    .amount +=
                    ingredient.amount *
                    scale;
            }
        }
    );
}


// =====================================================
// FORMAT AMOUNTS
// =====================================================

function formatAmount(amount) {

    if (
        Number.isInteger(amount)
    ) {

        return amount;
    }


    return Number(
        amount.toFixed(2)
    );
}


// =====================================================
// UPDATE WHEN SERVINGS CHANGE
// =====================================================

document
    .getElementById("servings")
    .addEventListener(
        "change",
        function () {

            if (
                !selectedLunch ||
                !selectedDinner
            ) {

                return;
            }


            const servings =
                getServings();


            if (!servings) {
                return;
            }


            updateLunch(
                servings
            );

            updateDinner(
                servings
            );

            createGroceryList(
                servings
            );
        }
    );
