import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Post from '../post/Post';

export default function FeedContainer() {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    height: '100vh',
    padding: '74px 14px',
    overflow: 'auto',
  },
});
