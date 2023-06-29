import { IngredientType } from "../../types/IngredientType";

const Ingredient = ({
  ingredient,
  quantity,
}: {
  ingredient: IngredientType;
  quantity?: number;
}) => {
  return (
    <>
      {!ingredient.unit && quantity && quantity > 1 ? (
        <span>{ingredient.names}</span>
      ) : (
        <span>{ingredient.name}</span>
      )}
    </>
  );
};

export default Ingredient;
