import { useState } from "react";
import { ListOfRecipes } from "../../types/RecipeType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    <div className="w-full flex flex-col items-start px-3">
      <h1 className="ml-3 text-sm mb-10 mt-2 text-gray-500 tracking-widest">
        Résultats : {recipes.length} recettes
      </h1>
      <div className="w-full flex flex-wrap justify-evenly md:justify-between lg:justify-evenly">
        {recipes.map((obj) => (
          <Recipe recipe={obj} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
