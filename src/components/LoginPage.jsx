import { Button, Container, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useContext } from "react";
import { Context } from "../index";
import firebase from "firebase";

export const LoginPage = () => {
  const { auth } = useContext(Context);

  const loginHandller = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  }

  return (
   <Container>
     <Grid 
      container 
      style={{height: window.innerHeight - 50}}
      alignItems={"center"}
      justify={"center"}
     >
       <Grid style={{width: 400, background: 'lightgray'}}
        container
        alignItems={"center"}
        direction={"column"}
       >
         <Box p={5}>
           <Button onClick={loginHandller} variant={"outlined"}>Google</Button>

         </Box>
       </Grid>
     </Grid>
   </Container>
  )
}