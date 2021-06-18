import React from 'react';
import { ListItem, TextField, Button, makeStyles } from '@material-ui/core';

export default function CommentField() {
  const classes = useStyles();
  return (
    <ListItem>
      <form className={classes.root}>
        <TextField
          className={classes.textField}
          variant="outlined"
          size="small"
        />
        {/* TODO: add textField closing tag and value inside */}
        <Button className={classes.commentBtn} variant="contained">
          comment
        </Button>
      </form>
    </ListItem>
  );
}

const useStyles = makeStyles({
  root: {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
  },
  textField: {
    flex: '1',
  },
  commentBtn: {
    marginLeft: '16px',
  },
});
