import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Menu, { MenuProps } from "@mui/material/Menu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuToStore } from "../../reducers/tag";
import BasicButtons from "../MaterialUI/BasicButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type SimpleMenuProps = {
  onFilterChange: (filter: string) => void;
};

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function SimpleMenu({ onFilterChange }: SimpleMenuProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const dispatch = useDispatch();
  const handleClick = (filter: string) => {
    dispatch(addMenuToStore(filter));
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#F6FAFD",
          color: "black",
          border: "1px solid lightgray",
        }}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
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
      </StyledMenu>
    </div>
  );
}
