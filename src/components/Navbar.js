import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />

                </IconButton>
                <Typography varient="h6">Live score</Typography>

            </Toolbar>
        </AppBar>
    )

}
export default Navbar;