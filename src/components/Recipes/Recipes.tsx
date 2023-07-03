import { useState } from "react";
import { ListOfRecipes } from "../../types/RecipeType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    <div className="w-screen flex flex-col items-start">
      <h1 className="ml-20 mb-10 tracking-widest">
        Résultats : {recipes.length} recettes
      </h1>
      <div className="w-full flex flex-wrap justify-evenly">
        {recipes.map((obj) => (
          <Recipe recipe={obj} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
