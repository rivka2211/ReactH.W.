import Avatar from '@mui/material/Avatar';
import { useContext, useEffect } from 'react';
import { Box, Tooltip } from '@mui/material';
import { UserContext } from '../UserReducer';
import UpdateDetails from './UpdateDetails';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
 
export default function UserProfile() {

  const { user } = useContext(UserContext)
  console.log(user);
  useEffect(() => {
    document.title = `Hello: ${user.firstName}`; 
    console.log("User profile updated:", user);
  }, [user]);
  const userName = `${user.firstName} ${user.lastName}`;
  return (
    <Box sx={{position:'absolute',top:0,left:0, padding:'15px'}}>
      <Tooltip title={userName}>
        <Avatar {...stringAvatar(userName)} />
      </Tooltip>
      <h2>Hellow {userName}!!</h2>
      <UpdateDetails />
    </Box>
  );
}
