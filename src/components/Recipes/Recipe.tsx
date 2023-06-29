import { RecipeType } from "../../types/RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { useState } from "react";
// import { Tags } from "../Tags/Tags";
import { Tag } from "../Tags/Tag";

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const [showSteps, setShowSteps] = useState<Boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  return (
    <div className="w-[560px] min-h-[400px] bg-white flex justify-between mb-8">
      <div className="w-[50%]">
        <img
          src={`${recipe.imageURL}`}
          alt={recipe.name}
          className="w-full h-[200px] object-cover rounded-lg shadow-md"
        />
        <div className="h-[120px]">
          <h2 className="text-lg text-left my-3 font-semibold text-zinc-700">
            {recipe.name}
          </h2>
          <p className="font-thin text-left text-sm text-zinc-500">
            {recipe.description}
          </p>
        </div>
        <div className="flex justify-evenly">
          {recipe.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} enableCursorPointer={false} />
          ))}
        </div>
      </div>
      <div className="w-[45%]">
        <IngredientsWithQuantity
          ingredientsWithQuantity={recipe.ingredientsWithQuantity}
        />
      </div>

      {/* <div className="w-[80%] h-[1px] bg-zinc-300 mx-auto" /> */}

      {/* <div>
        Etapes de la recette:
        <button onClick={() => setShowSteps(!showSteps)}>
          {showSteps ? "Masquer" : "Afficher"}
        </button>
        {recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
      </div> */}
    </div>
  );
};

export default Recipe;
