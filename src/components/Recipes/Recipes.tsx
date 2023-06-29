import { ListOfRecipes } from "../../types/RecipeType";
import Recipe from "./Recipe";

export const Recipes = ({ recipes }: { recipes: ListOfRecipes }) => {
  return (
    <div className="w-screen flex flex-wrap justify-evenly">
      {recipes.map((obj) => (
        <Recipe recipe={obj} />
      ))}
    </div>
  );
};

export default Recipes;
