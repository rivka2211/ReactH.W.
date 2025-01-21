import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "../UserReducer";
import { Modal, Box, Grid2 as Grid, TextField, Button } from "@mui/material";

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UserAllDetails = ({ handleSubmit,text }: { handleSubmit: (data: any) => void ,text:string}) => {
    const { user } = useContext(UserContext);
    const [formData, setFormData] = useState(user);
    const [open, setOpen] = useState(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };
    return (
        <Modal open={open} onClose={handleSubmit}>
            <Box sx={style1} component="form" >
                <Grid container rowSpacing={1} >
                    <TextField id="firstName" label='First Name' defaultValue={user.firstName} onChange={handleChange} />
                    <TextField id="lastName" label='Last Name' defaultValue={user.lastName} onChange={handleChange} />
                    <TextField id="email" label='Email' defaultValue={user.email} onChange={handleChange} type="email" />
                    <TextField id="address" label='Address' defaultValue={user.address} onChange={handleChange} />
                    <TextField id="password" label='Password' defaultValue={user.password} onChange={handleChange} type="password" />
                    <TextField id="phone" label='phone Number' defaultValue={user.phone} onChange={handleChange} />
                    {/*size={6}*/}
                    <Grid >
                        <Button onClick={() => { setOpen(false); handleSubmit(formData); }}> {text}</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}
export default UserAllDetails