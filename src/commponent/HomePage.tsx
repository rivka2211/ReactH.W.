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
import { initialUser, User, UserContext, UserReducer } from "../UserReducer";


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

const HomePage = () => {
    // const UserContext = createContext(inithialUser);
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
    // const [users, usersDispatch] = useReducer(UserReducer, [] as User[])
    const [user, setUser] = useState<User>(initialUser);

    return (
        <>
            <UserContext.Provider value={{user,setUser}}>
                {/* <UserProfile /> */}
                <Grid container>
                    <Grid size={4}>
                        {!isLogin ?
                            <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>Login</Button> :
                            <UserProfile />}
                    </Grid>
                </Grid>
                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box sx={style} > <Grid container rowSpacing={1} >
                        <TextField label='UserName' />
                        <TextField label='Email' type="email" />
                        <TextField label='Password' type="password" />
                        <Grid size={6}>
                            <Button onClick={() => { setOpen(false); setIsLogin(true) }}> Login  </Button>
                        </Grid>
                    </Grid>
                    </Box>
                </Modal>
            </UserContext.Provider >
        </>
    )

}

export default HomePage