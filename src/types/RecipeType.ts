import { IngredientType } from "./IngredientType";
import { StepType } from "./StepType";
import { IngredientWithQuantityType } from "./IngredientWithQuantityType";
import { TagType } from "./TagType";
import { MenuType } from "./MenuType";

export type RecipeType = {
  name: string;
  description: string;
  imageURL: string;
  ingredients?: IngredientType[];
  steps?: StepType[];
  ingredientsWithQuantity: IngredientWithQuantityType[];
  tags: TagType[];
  type: string;
};

export type ListOfRecipes = RecipeType[];
