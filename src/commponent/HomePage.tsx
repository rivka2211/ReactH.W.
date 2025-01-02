import { createContext, useReducer, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    Input,
    TextField
} from "@mui/material";
import { DisplaySettings } from "@mui/icons-material";
import UserProfile from "./UserProfile";
import { User, UserReducer } from "../UserReducer";


const style = {
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
const inithialUser:User={firstName:"israel",lastName:"israeli",address:"",email:"aaa@bbb.com",password:"12345",phon:12345}

const HomePage = () => {
    const UserContext = createContext(inithialUser);
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
    const [users, usersDispatch] = useReducer(UserReducer, [] as User[])
    let myUser:User=users[0]

    return (
        <>
        <UserContext.Provider value={inithialUser}>
            {/* <UserProfile /> */}
            <Grid container>
                <Grid size={4}>
                    {!isLogin ?
                        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>Login</Button> :
                        <UserProfile />}
                </Grid>
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style} >
                    <TextField label='UserName' />
                    <TextField label='Email' type="email"/>
                    <TextField label='Password' type="password"/>
                    <br />
                    <Button onClick={() => { setOpen(false); setIsLogin(true) }}>
                        Login
                    </Button>
                </Box>
            </Modal>
        </UserContext.Provider >
        </>
    )

}

export default HomePage