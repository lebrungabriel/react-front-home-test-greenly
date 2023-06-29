import { RecipeType } from "../types/RecipeType";
import { ListOfRecipes } from "../types/RecipeType";

import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
} from "./IngredientData";

import {
  stepsFondantChocolat,
  stepsPavlova,
  stepsTarteAuxPoires,
} from "./StepData";

import {
  summer,
  winter,
  chocolateTag,
  fruits,
  meat,
  fish,
  vegetarian,
  vegan,
} from "./TagData";

const pavlova: RecipeType = {
  name: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  etapes: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, fruits],
};

const fondantChocolat: RecipeType = {
  name: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "data:image/jpeg;base64,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",
  ingredients: [chocolate, egg, flour, butter, sugar],
  etapes: stepsFondantChocolat,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [chocolateTag, winter],
};

const pearPie: RecipeType = {
  name: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  etapes: stepsTarteAuxPoires,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [vegetarian, fruits],
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
  tags: [summer, vegan],
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
];

export const summerRecipes = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("summer");
});

export const sugarRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );
  return ingredientsList && ingredientsList.includes("sucre");
});

export const chocolateRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );

  return ingredientsList && ingredientsList.includes("chocolat");
});

export const dessertRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tags: string[] = recette.tags.map((tag) => tag.id);
  return tags.includes("dessert");
});

export const chocolateDessertRecipes: RecipeType[] = allRecipes.filter(
  (recette) => {
    const tagsString: string[] = recette.tags.map((tag) => tag.id);
    const ingredientString: string[] = recette.ingredients
      ? recette.ingredients.map((ingredient) => ingredient.name)
      : [];
    return (
      tagsString.includes("dessert") && ingredientString.includes("chocolat")
    );
  }
);

export const noEggsRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return !ingredientsString.includes("oeuf");
});

export const vegetarianRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds = recette.tags.map((tag) => tag.id);
  return tagIds.includes("vegetarian");
});

export const veganRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds: string[] = recette.tags.map((tag) => tag.id);
  return tagIds.includes("vegan");
});
