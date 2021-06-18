import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core';

export default function Comment(props) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={props.avatarSrc} />
      </ListItemAvatar>
      <ListItemText
        primary={props.userName}
        secondary={
          <>
            <Typography variant="body1">{props.content}</Typography>
            <Typography variant="body2">{props.time}</Typography>
          </>
        }
      />
    </ListItem>
  );
}
