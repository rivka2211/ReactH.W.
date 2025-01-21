import { useContext, useEffect, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField
} from "@mui/material";
import UserProfile from "./UserProfile";
import { initialUser, User, UserContext } from "../UserReducer";
import UserAllDetails from "./UserAllDetails";


const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const style = {
    top: 0,              // Align to the top
    left: 0,             // Align to the left
    display: 'flex',     // Use flexbox for layout
    flexDirection: 'column', // Stack buttons vertically
    position: 'absolute',
    padding: 2
}

//The `HomePage` component is the main entry point for the application's home page. It handles user authentication and provides a modal for login and sign-up functionality. The component uses the `UserContext` to manage the user's state and dispatch actions to update the user's information.

//The `handleLogIn` function is called when the user clicks the "Login" button in the modal. It updates the user's information in the `UserContext` and sets the `isLogin` state to `true`.

//The component renders different content based on the `isLogin` state. If the user is not logged in, it displays two buttons for login and sign-up. If the user is logged in, it renders the `UserProfile` component.

//The modal is displayed when the user clicks the "Login" or "LogUp" button. It contains input fields for the user's username, email, and password, as well as a "Login" button that calls the `handleLogIn` function.

const HomePage = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [logupOpen, setLogupOpen] = useState(false)
    const { user, userDispatch } = useContext(UserContext)
    userDispatch({ type: 'GET', data: 1 })
    // let currentUser:User =initialUser
    // console.log(user);
 


    const handleLogIn = () => {
        userDispatch({
            type: 'UPDATE',
            data: user
        })
        setLoginOpen(false);
        setIsLogin(true)
    }

    const handleLogup = (formData: any) => {
        setLogupOpen(false);
        setIsLogin(true);
        userDispatch({
        type: 'ADD',
        data: formData
      })
      // setOpen(false);
      console.log("in handleLogup");
      console.log("formdata",formData);
      console.log("user",user);
    };
    return (
        <>
            <UserContext.Provider value={{ user, userDispatch }}>

                {!isLogin ?
                    <Box sx={style} >
                        <Button color="primary" variant="outlined" onClick={() => setLoginOpen(true)}>Login</Button>
                        <Button color="primary" variant="outlined" onClick={() => setLogupOpen(true)}>LogUp</Button>
                    </Box > :
                    <UserProfile />
                }

                <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
                    <Box sx={boxStyle} >
                        <Grid container rowSpacing={1} >
                            <TextField label='UserName' />
                            <TextField label='Email' type="email" />
                            <TextField label='Password' type="password" />
                            <Grid size={6}>
                                <Button variant="contained" onClick={handleLogIn}> Login  </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
               { logupOpen&&<UserAllDetails handleSubmit={handleLogup} text="LogUp"/>}
               
            </UserContext.Provider >
        </>
    )

}

export default HomePage