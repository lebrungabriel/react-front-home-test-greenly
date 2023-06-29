import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { StepType } from "../../types/StepType";

export const Step = ({ step }: { step: StepType }) => {
  return (
    <div>
      <h6 className="text-zinc-800 text-sm mb-1">
        {step.order}. {step.description}
      </h6>
      <p className="text-sm font-thin mb-3">
        {step.ingredients && (
          <IngredientsWithQuantity ingredientsWithQuantity={step.ingredients} />
        )}
      </p>
    </div>
  );
};

export default Step;
