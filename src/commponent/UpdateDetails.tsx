import { Box, Button, Grid2 as Grid, Modal, TextField } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "../UserReducer";

const style = {
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
const UpdateDetails = () => {
  const { user, userDispatch } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleUpdate = () => {
    userDispatch({
      type: 'ADD',
      data: formData
    })
    setOpen(false);
    console.log("in handleUpdate");
    console.log(user);
  };

  return (
    <>
      <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>Update Details</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style} component="form" >
          <Grid container rowSpacing={1} >
            <TextField id="firstName" label='First Name' defaultValue={user.firstName} onChange={handleChange} />
            <TextField id="lastName" label='Last Name' defaultValue={user.lastName} onChange={handleChange} />
            <TextField id="email" label='Email' defaultValue={user.email} onChange={handleChange} type="email" />
            <TextField id="address" label='Address' defaultValue={user.address} onChange={handleChange} />
            <TextField id="password" label='Password' defaultValue={user.password} onChange={handleChange} type="password" />
            <TextField id="phone" label='phone Number' defaultValue={user.phone} onChange={handleChange} />
            <Grid size={6}>
              <Button onClick={handleUpdate}> Update</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
export default UpdateDetails