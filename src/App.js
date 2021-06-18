import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from './components/navbar/Navbar';
import Feed from './components/feed/Feed';
import ChatBar from './components/chatBar/ChatBar';

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Feed />
      <ChatBar />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    background: '#f7f7f7',
  },
});
