import { useState } from "react"
import {
    Button,
    Grid2 as Grid,
    Modal,
    Box,
    Input,
    TextField
} from "@mui/material";


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
    const [isLogin, setIsLogin] = useState(false)
    const [open, setOpen] = useState(false)


    return (
        <>
            <Grid container>
                <Grid size={4}>
                    {!isLogin ?
                        <Button color="primary" variant="contained" onClick={() => setOpen(!open)}>Login</Button> :
                        'Logged In'}
                </Grid>
            </Grid>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <TextField label='userName' />
                    <Button onClick={() => {
                        setOpen(false); setIsLogin(true)
                    }}>Login</Button>
                </Box>
            </Modal>
        </>
    )

}

export default HomePage