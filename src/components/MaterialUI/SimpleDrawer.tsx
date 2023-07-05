import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuToStore } from "../../reducers/tag";
import Box from "@mui/material/Box";
import BasicButtons from "./BasicButton";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const SimpleDrawer = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClick = (filter: string) => {
    dispatch(addMenuToStore(filter));
    setActiveFilter(filter);
  };

  const toggleDrawer = (openState: boolean) => () => {
    setOpen(openState);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { key: "all", text: "Toutes les recettes" },
          { key: "starter", text: "Entrées" },
          { key: "dish", text: "Plats" },
          { key: "dessert", text: "Desserts" },
        ].map(({ key, text }) => (
          <ListItem key={key} disablePadding>
            <BasicButtons
              onClick={() => handleClick(key)}
              text={text}
              active={activeFilter === key}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default SimpleDrawer;
