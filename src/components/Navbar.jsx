import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../App.css"
import { Grid, Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from "../utils/constants";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";



export const Navbar = () => {
  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return (
  <AppBar position="static">
    <Toolbar variant={"dense"}>
      <Grid container justify={"flex-end"} >
        {user ? 
        <Button onClick={() => auth.signOut()} variant={"outlined"}>Log out</Button>
        :
        <NavLink to={LOGIN_ROUTE}>
          <Button variant={"outlined"}>Login</Button>
        </NavLink>
      }
      </Grid>
    </Toolbar>
  </AppBar>
  )
}