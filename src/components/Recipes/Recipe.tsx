import { RecipeType } from "../../types/RecipeType";
import { StepType } from "../../types/StepType";
import { Tag } from "../Tags/Tag";
import SimpleAccordion from "../MaterialUI/SimpleAccordion";

export const Recipe = ({ recipe }: { recipe: RecipeType }) => {
  const steps: StepType[] = recipe.steps || [];

  return (
    <div className="w-full md:w-[350px] lg:w-[500px] min-h-[400px] bg-white flex flex-col justify-between mb-8">
      <div className="w-full">
        <img
          src={`${recipe.imageURL}`}
          alt={recipe.name}
          className="w-full h-[200px] object-cover rounded-lg shadow-md"
        />
        <div className="h-[80px] mb-3">
          <h2 className="text-lg text-left my-3 font-semibold text-zinc-700">
            {recipe.name}
          </h2>
          <p className="font-thin text-left text-sm text-zinc-500">
            {recipe.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-evenly py-3">
          {recipe.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} enableCursorPointer={false} />
          ))}
        </div>
      </div>
      <div className="w-full my-4 px-3">
        {/* <IngredientsWithQuantity
          ingredientsWithQuantity={recipe.ingredientsWithQuantity}
        /> */}
        <SimpleAccordion
          ingredientsWithQuantity={recipe.ingredientsWithQuantity}
          steps={steps}
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
