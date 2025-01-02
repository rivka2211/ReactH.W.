import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';
import { Tooltip } from '@mui/material';
import { User } from '../UserReducer';
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

// const user:User=useContext(UserContext)
const user:User={firstName:"israel",lastName:"israeli",address:"",email:"aaa@bbb.com",password:"12345",phon:12345}

const userName=user.firstName+" "+user.lastName
  return (
      <>
      <Tooltip title={userName}>
      <Avatar {...stringAvatar(userName)} />
    </Tooltip>
    <UpdateDetails />
    </>
  );
}
