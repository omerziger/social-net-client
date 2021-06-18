import React, { useState } from 'react';
import {
  makeStyles,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  List,
  Badge,
} from '@material-ui/core';

import { IoMdHeart } from 'react-icons/io';
import { MdComment } from 'react-icons/md';
import { BiRepost } from 'react-icons/bi';

import CommentField from '../commentField/CommentField';
import Comment from '../comment/Comment';

export default function Post() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar />}
        title="Omer Ziger"
        subheader="June 16, 2021"
      />
      <CardContent>
        <Typography>Hey Everybody, send me messages!!</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <IoMdHeart />
        </IconButton>
        <IconButton>
          <BiRepost />
        </IconButton>
        <Badge badgeContent={1} color="primary">
          <IconButton onClick={handleExpandClick}>
            <MdComment />
          </IconButton>
        </Badge>
      </CardActions>
      <Collapse in={expanded} unmountOnExit>
        <List>
          <CommentField />
          <Comment
            userName="Dean Geva"
            content="Hello how are you"
            time="Today 18:00"
          />
        </List>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    height: 'fit-content',
    width: '100%',
    marginBottom: '20px',
  },
});
