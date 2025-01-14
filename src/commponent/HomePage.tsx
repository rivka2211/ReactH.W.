import { useContext, useEffect, useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    TextField
} from "@mui/material";
import UserProfile from "./UserProfile";
import { UserContext } from "../UserReducer";


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
// const style = {
//     top: 0,              // Align to the top
//     left: 0,             // Align to the left
//     // display: 'flex',     // Use flexbox for layout
//     // flexDirection: 'column', // Stack buttons vertically
//     padding: 2
// }

const HomePage = () => {


    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)
    const { user, userDispatch } = useContext(UserContext)

    const handleLogIn = () => {
        userDispatch({
            type: 'UPDATE',
            data: user
        })
        setOpen(false);
        setIsLogin(true)
    }
    return (
        <>
            <UserContext.Provider value={{ user, userDispatch }}>

                {!isLogin ?
                    <Box sx={{
                        top: 0,              // Align to the top
                        left: 0,             // Align to the left
                        display: 'flex',     // Use flexbox for layout
                        flexDirection: 'column', // Stack buttons vertically
                        position: 'absolute',
                        padding: 2
                    }} >
                        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>Login</Button>
                        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>LogUp</Button>
                    </Box > :
                    <UserProfile />
                }


                <Modal open={open} onClose={() => setOpen(false)}>
                    <Box sx={style} >
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
            </UserContext.Provider >
        </>
    )

}

export default HomePage