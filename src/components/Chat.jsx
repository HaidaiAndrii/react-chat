import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "../index";
import { Container, Grid } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore"
import { Loader } from './Loader';
import firebase from "firebase";
import Avatar from '@material-ui/core/Avatar';
// import { borderRadius } from "@material-ui/system";

export const Chat = () => {

  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [messageValue, setMessageValue] = useState('');
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
    )

  async function sendMessage() {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: messageValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    setMessageValue('');
  }

  if(loading) {
    return <Loader/>
  }

  return (
    <Container>
      <Grid 
        container 
        style={{height: window.innerHeight - 50, marginTop: 20}}
        justify={"center"}

      >
        <div style={{width: '80%', height: '60vh', border: '1px solid white', overflowY: 'auto', borderRadius: '20px'}}>
          {messages.map((message, id) => 
            <div key={id} style={{margin: 10,
              border: user.uid === message.uid ? '2px solid green' : 'wpx dashed red',
              marginLeft:  user.uid === message.uid ? 'auto' : '10px',
              width: 'fit-content',
              padding: 8,
              background: 'dark',
              color: 'white',
              backgroundColor: '#3B3B3B',
              borderRadius: '20px'
            }}>
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>
                  {message.displayName}
                </div>
              </Grid>
              <div>{message.text}</div>
            </div>
            )}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{width: '80%'}}
          >
            <TextField
              variant={"outlined"}
              fullWidth rowsMax={2}
              value={messageValue}
              onChange={e => setMessageValue(e.target.value)}
              style={{backgroundColor: "white", color: 'black', borderRadius: '20px', marginBottom: '20px'}}
            />
            <Button style={{backgroundColor: "green", color: 'white'}} onClick={sendMessage} variant={"outlined"}>Send</Button>
          </Grid>
      </Grid>
    </Container>
  )
}