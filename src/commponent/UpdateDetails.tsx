import { Box, Button, Grid2 as Grid, Modal, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { User } from "../UserReducer";

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
  const [open, setOpen] = useState(false)
  const myUser: User = { firstName: "israel", lastName: "israeli", address: "", email: "aaa@bbb.com", password: "12345", phon: 12345 }
  const [formData, setFormData] = useState<User>(myUser)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })  //{name:'',phone:'',name'G'} => {name:'G',phone:''}     
  }
  return (
    <>
    <Grid container>
      <Grid size={4}>
        <Button color="primary" variant="outlined" onClick={() => setOpen(true)}>Update Details</Button>
      </Grid>
    </Grid>
      <Modal open={open} onClose={() => setOpen(false)}>
          <Box sx={style} component="form">
          <TextField id="firstName" label='First Name' defaultValue={myUser.firstName} onChange={handleChange}/>
          <TextField id="lastName" label='Last Name' defaultValue={myUser.lastName}onChange={handleChange}/>
          <TextField id="email" label='Email' defaultValue={myUser.email}onChange={handleChange} type="email"/>
          <TextField id="address" label='Address' defaultValue={myUser.address}onChange={handleChange}/>
          <TextField id="password" label='Password' defaultValue={myUser.password}onChange={handleChange} type="password"/>
          <TextField id="phon" label='Phon Number' defaultValue={myUser.phon}onChange={handleChange}/>
          <div></div>
            <Button onClick={() => { setOpen(false);} }>
            Update
            </Button>
          </Box>
        </Modal>
      </>
  );
}
export default UpdateDetails