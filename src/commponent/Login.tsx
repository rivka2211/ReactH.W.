import { useReducer } from "react"
import { User, userReducer } from "../user"
// import * as React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import userDetailsForm from "./userDetailsForm";

const handleLogIn=()=>{
    return <userDetailsForm />
}

const Login=()=>{
    const [users, usersDispatch] = useReducer(userReducer , [] as User[])
    return (
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<LoginIcon />} onClick={handleLogIn()}>
            Login
          </Button>
          {/* <Button variant="contained" endIcon={<LoginIcon />}>
          Login
          </Button> */}
        </Stack>
      );
}
export default Login