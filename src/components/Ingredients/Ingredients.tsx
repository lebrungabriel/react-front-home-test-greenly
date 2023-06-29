import { IngredientType } from "../../types/IngredientType";
import Ingredient from "./Ingredient";

const Ingredients = ({ ingredients }: { ingredients?: IngredientType[] }) => {
  return (
    <>
      {ingredients &&
        ingredients.map((ingredient) => <Ingredient ingredient={ingredient} />)}
    </>
  );
};

export default Ingredients;
