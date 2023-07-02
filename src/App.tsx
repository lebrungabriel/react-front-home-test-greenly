import { useState } from "react";
import "./styles.css";
import Recipes from "./components/Recipes/Recipes";
import {
  allRecipes,
  dessertRecipes,
  starterRecipes,
  dishRecipes,
} from "./data/RecipeData";
import { Tags } from "./components/Tags/Tags";
import { tagList } from "./data/TagData";
import Header from "./components/Layout/Header";

export default function App() {
  const [filter, setFilter] = useState<string>("all");

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const renderComponentBasedOnTypeFilter = () => {
    if (filter === "starters") {
      return <Recipes recipes={starterRecipes} />;
    } else if (filter === "dishes") {
      return <Recipes recipes={dishRecipes} />;
    } else if (filter === "desserts") {
      return <Recipes recipes={dessertRecipes} />;
    } else if (filter === "all") {
      return <Recipes recipes={allRecipes} />;
    }
  };

  return (
    <>
      <Header activeFilter={filter} onFilterChange={handleFilterChange} />
      <div>
        <Tags tags={tagList} />
        {renderComponentBasedOnTypeFilter()}
      </div>
    </>
  );
}
