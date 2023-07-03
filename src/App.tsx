import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Layout/Header";
import Recipes from "./components/Recipes/Recipes";
import { Tags } from "./components/Tags/Tags";

import {
  allRecipes,
  dessertTags,
  dishTags,
  starterTags,
} from "./data/RecipeData";
import { allTags } from "./data/TagData";
import { starterRecipes, dishRecipes, dessertRecipes } from "./data/RecipeData";

import { RecipeType } from "./types/RecipeType";
import { TagType } from "./types/TagType";

import { TagState } from "./reducers/tag";
import "./styles.css";

export default function App() {
  const [filterMenu, setFilterMenu] = useState<string>("all");

  const selectedTags = useSelector(
    (state: { tag: TagState }) => state.tag.value
  );

  let recipesToRender: RecipeType[] = [];
  let tagsToRender: TagType[] = [];

  if (filterMenu === "all") {
    recipesToRender = allRecipes;
    tagsToRender = allTags;
  } else if (filterMenu === "starter") {
    recipesToRender = starterRecipes;
    tagsToRender = starterTags;
  } else if (filterMenu === "dish") {
    recipesToRender = dishRecipes;
    tagsToRender = dishTags;
  } else if (filterMenu === "dessert") {
    recipesToRender = dessertRecipes;
    tagsToRender = dessertTags;
  }

  // Apply the tag filter
  if (selectedTags.tags.length > 0) {
    recipesToRender = recipesToRender.filter((recipe) => {
      const recipeTagIds = recipe.tags.map((tag) => tag.id);
      return selectedTags.tags.some((selectedTag) =>
        recipeTagIds.includes(selectedTag.id)
      );
    });
  }

  const handleFilterChange = (filter: string) => {
    setFilterMenu(filter);
  };

  return (
    <>
      <Header onFilterChange={handleFilterChange} />
      <Tags tags={tagsToRender} />
      <Recipes recipes={recipesToRender} />
    </>
  );
}
