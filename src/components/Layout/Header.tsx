import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuToStore } from "../../reducers/tag";
import { TagType } from "../../types/TagType";
import BasicButtons from "../MaterialUI/BasicButton";
import SimpleMenu from "../MaterialUI/SimpeMenu";

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
    <div className="container mx-auto w-screen h-[100px] flex justify-between px-3 items-center">
      <h1 className="text-3xl tracking-widest font-light">Super Cook</h1>
      <div id="nav" className="w-8/12 hidden xl:flex justify-evenly">
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
      <div className="xl:hidden">
        <SimpleMenu onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default Header;
