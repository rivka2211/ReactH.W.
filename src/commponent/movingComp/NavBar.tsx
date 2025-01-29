// import { Link } from "react-router-dom"

// const NavBar = () => {
//     return (<>
//         {/* <h1>NavBar </h1> */}
//         {/* <h2>nav bar</h2> */}
//         <nav>
//         <Link to='/'>Home</Link> |
//         <Link to='/about'>About</Link> |
//         <Link to='/recipes'>Recipes</Link>
//         </nav>
//     </>)
// }

// export default NavBar


import { Link } from "react-router-dom";
import { Drawer, Button, ListItem, ListItemText, List, Divider } from "@mui/material";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleDrawerToggle}>Menu</Button>
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <List>
          <ListItem button disablePadding component={Link} to="/">
            <ListItemText primary="Home" sx={{ fontSize: 24, fontWeight: 600 }} />
          </ListItem>
          <ListItem button disablePadding component={Link} to="/about">
            <ListItemText primary="About" sx={{ fontSize: 24, fontWeight: 600 }} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button disablePadding component={Link} to="/recipes">
            <ListItemText primary="Recipes" sx={{ fontSize: 24, fontWeight: 600 }} />
          </ListItem>
          </List>
      </Drawer>
    </>
  );
};
export default NavBar;