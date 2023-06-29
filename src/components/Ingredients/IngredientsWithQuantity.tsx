import { IngredientWithQuantityType } from "../../types/IngredientWithQuantityType";
import { IngredientWithQuantity } from "./IngredientWithQuantity";

const IngredientsWithQuantity = ({
  ingredientsWithQuantity,
}: {
  ingredientsWithQuantity: IngredientWithQuantityType[];
}) => {
  return (
    <>
      {ingredientsWithQuantity.map((obj) => (
        <IngredientWithQuantity ingredientWithQuantity={obj} />
      ))}
    </>
  );
};

export default IngredientsWithQuantity;
