import React from "react";
import { useDispatch } from "react-redux";
import { addMenuToStore, addTagNameToStore } from "../../reducers/tag";
import { TagType } from "../../types/TagType";
import BasicButtons from "../MaterialUI/BasicButton";
import { useState } from "react";

type HeaderType = {
  onFilterChange: (filter: string) => void;
};

const Header = ({ onFilterChange }: HeaderType) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const dispatch = useDispatch();
  const handleClick = (filter: string) => {
    dispatch(addMenuToStore(filter));
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="w-screen h-[220px] flex flex-col justify-evenly items-center">
      <h1 className="text-6xl tracking-widest font-light">Super Cook</h1>
      <div className="w-10/12 flex justify-evenly">
        <BasicButtons
          onClick={() => handleClick("all")}
          text="Toutes les recettes"
          active={activeFilter === "all"}
        />
        <BasicButtons
          onClick={() => handleClick("starter")}
          text="Entrées"
          active={activeFilter === "starter"}
        />
        <BasicButtons
          onClick={() => handleClick("dish")}
          text="Plats"
          active={activeFilter === "dish"}
        />
        <BasicButtons
          onClick={() => handleClick("dessert")}
          text="Desserts"
          active={activeFilter === "dessert"}
        />
      </div>
    </div>
  );
};

export default Header;
