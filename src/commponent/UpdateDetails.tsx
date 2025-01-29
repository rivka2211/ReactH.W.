import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../UserReducer";
import UserAllDetails from "./UserAllDetails";


const UpdateDetails = () => {
  let { user, userDispatch } = useContext(UserContext);
   const [open, setOpen] = useState(false);
  // const [formData, setFormData] = useState(user);



  const handleUpdate = (formData: any) => {
      setOpen(false);
      userDispatch({
      type: 'UPDATE',
      data: formData
    })
    // setOpen(false);
    console.log("in handleUpdate");
    console.log("formdata",formData);
    console.log("user",user);
  };

  return (
    <>
      <Button color="primary" variant="outlined" onClick={()=>setOpen(true)}>Update Details</Button>
      {open&& <UserAllDetails handleSubmit={handleUpdate} text="Update"/>}
    </>
  );
}
export default UpdateDetails