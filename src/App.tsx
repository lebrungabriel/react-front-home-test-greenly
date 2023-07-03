import "./styles.css";
import Recipes from "./components/Recipes/Recipes";
import { allRecipes } from "./data/RecipeData";
import { Tags } from "./components/Tags/Tags";
import { tagList } from "./data/TagData";
// import Header from "./components/Layout/Header";
import { useSelector } from "react-redux";
import { TagState } from "./reducers/tag";
import { RecipeType } from "./types/RecipeType";

export default function App() {
  const selectedTags = useSelector(
    (state: { tag: TagState }) => state.tag.value
  );
  let filteredRecipes: RecipeType[] = allRecipes;

  console.log("REDUX STORE 🔥", selectedTags.tags);

  if (selectedTags.tags.length > 0) {
    filteredRecipes = allRecipes.filter((recipe) => {
      const recipeTagIds = recipe.tags.map((tag) => tag.id);
      return selectedTags.tags.some((selectedTag) =>
        recipeTagIds.includes(selectedTag.id)
      );
    });
  }

  console.log("ALL RECIPES 👑😈", allRecipes);
  return (
    <>
      {/* <Header activeFilter="all" /> */}
      <Tags tags={tagList} />
      <Recipes recipes={filteredRecipes} />
    </>
  );
}
