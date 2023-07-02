import React from "react";
import BasicButtons from "../MaterialUI/BasicButton";

type Props = {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
};

const Header = ({ onFilterChange, activeFilter }: Props) => {
  const handleClick = (filter: string) => {
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
          onClick={() => handleClick("starters")}
          text="Entrées"
          active={activeFilter === "starters"}
        />
        <BasicButtons
          onClick={() => handleClick("dishes")}
          text="Plats"
          active={activeFilter === "dishes"}
        />
        <BasicButtons
          onClick={() => handleClick("desserts")}
          text="Desserts"
          active={activeFilter === "desserts"}
        />
      </div>
    </div>
  );
};

export default Header;
