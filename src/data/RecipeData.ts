import { RecipeType } from "../types/RecipeType";
import { ListOfRecipes } from "../types/RecipeType";
import { TagType } from "../types/TagType";

import { allTags } from "./TagData";

import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  salmon,
  oil,
  beef,
  cheese,
  onion,
  lemon,
  carrot,
  veal,
  mushroom,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
  tomato,
  redPepper,
  greenPepper,
} from "./IngredientData";

import {
  stepsChocolateFudge,
  stepsPavlova,
  stepsPearPie,
  stepsWalfordSalad,
  stepsBakedSalmon,
  stepsVealBlanquette,
  stepsGaspacho,
  stepsBurger,
} from "./StepData";

import {
  summer,
  winter,
  chocolateTag,
  fruits,
  meat,
  starter,
  fish,
  vegetarian,
  vegan,
  dessert,
  dish,
} from "./TagData";

const pavlova: RecipeType = {
  name: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  steps: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, fruits, dessert],
};

const vealBlanquette: RecipeType = {
  name: "Blanquette de veau",
  description: "Comment est votre blanquette ? La blanquette est bonne.",
  imageURL:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhfnFx0ZDvjgFJ8NfM7g5THoCmlwCNWQXHA&usqp=CAU",
  ingredients: [veal, carrot, onion, cream, mushroom],
  steps: stepsVealBlanquette,
  ingredientsWithQuantity: [
    { ingredient: veal, quantity: 1, unit: "kg" },
    { ingredient: mushroom, quantity: 500, unit: "g" },
    { ingredient: onion, quantity: 1 },
    { ingredient: carrot, quantity: 2 },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [winter, meat, dish],
};

const burger: RecipeType = {
  name: "Burger maison",
  description: "Une recette facile à préparer et peu onéreuse.",
  imageURL:
    "https://www.socopa.fr/wp-content/uploads/2021/09/top-5-des-sauces-burger-maison-1.jpg",
  ingredients: [beef, cheese, onion, tomato, salad],
  steps: stepsBurger,
  ingredientsWithQuantity: [
    { ingredient: beef, quantity: 1 },
    { ingredient: tomato, quantity: 1 },
    { ingredient: onion, quantity: 1 },
    { ingredient: cheese, quantity: 2 },
    { ingredient: salad, quantity: 1 },
  ],
  tags: [meat, dish],
};

const gaspacho: RecipeType = {
  name: "Gaspacho",
  description: "Fraîche, vitaminée, cette soupe froide est parfaite pour l'été",
  imageURL:
    "https://www.primevere.com/voy_content/uploads/2023/02/gaspacho_tomate_et_concombre_aux_croutons-1-scaled.jpg",
  ingredients: [tomato, redPepper, greenPepper, cucumber, oil],
  steps: stepsGaspacho,
  ingredientsWithQuantity: [
    { ingredient: tomato, quantity: 8 },
    { ingredient: redPepper, quantity: 1 },
    { ingredient: greenPepper, quantity: 1 },
    { ingredient: cucumber, quantity: 1 },
    { ingredient: oil, quantity: 10, unit: "cl" },
  ],
  tags: [summer, vegetarian, starter],
};

const chocolateFudge: RecipeType = {
  name: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://www.myparisiankitchen.com/wp-content/uploads/2021/04/fondant-chocolat-mpk-pa-2.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  steps: stepsChocolateFudge,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [chocolateTag, winter, dessert],
};

const pearPie: RecipeType = {
  name: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  steps: stepsPearPie,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [vegetarian, fruits, dessert],
};

const waldorfSalad: RecipeType = {
  name: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [summer, vegan, starter],
  steps: stepsWalfordSalad,
};

const bakedSalmon: RecipeType = {
  name: "Saumon au four",
  description:
    "Pavé de saumon au four, idéal pour ne pas perdre trop de temps en cuisine",
  imageURL:
    "https://assets.epicurious.com/photos/62d6c5146b6e74298a39d06a/3:2/w_4998,h_3332,c_limit/BakedSalmon_RECIPE_04142022_9780_final.jpg",
  ingredients: [salmon, onion, oil, lemon],
  ingredientsWithQuantity: [
    { ingredient: salmon, quantity: 2 },
    {
      ingredient: onion,
      quantity: 5,
    },
    { ingredient: oil, quantity: 15, unit: "cl" },
    { ingredient: lemon, quantity: 1 },
  ],
  tags: [fish, summer, dish],
  steps: stepsBakedSalmon,
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  chocolateFudge,
  pearPie,
  waldorfSalad,
  vealBlanquette,
  bakedSalmon,
  gaspacho,
  burger,
];

export const starterRecipes: RecipeType[] = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("starter");
});

export const dishRecipes: RecipeType[] = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("dish");
});

export const dessertRecipes: RecipeType[] = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("dessert");
});

export const starterTags: TagType[] = allTags.filter((tag) => {
  return starterRecipes.some((recipe) => {
    return recipe.tags.includes(tag);
  });
});

export const dishTags: TagType[] = allTags.filter((tag) => {
  return dishRecipes.some((recipe) => {
    return recipe.tags.includes(tag);
  });
});

export const dessertTags: TagType[] = allTags.filter((tag) => {
  return dessertRecipes.some((recipe) => {
    return recipe.tags.includes(tag);
  });
});

console.log("STARTER TAGS", dishTags);
