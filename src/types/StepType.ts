import { IngredientWithQuantityType } from "../types/IngredientWithQuantityType";

export type StepType = {
  description: string;
  order: number;
  ingredients?: IngredientWithQuantityType[];
};
