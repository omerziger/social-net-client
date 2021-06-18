import React from 'react';
import { AppBar, Toolbar, Badge, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <Avatar className={classes.avatar} />
        </Badge>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    backdropFilter: 'blur(6px)',
    bottom: '0',
    position: 'fixed',
    boxShadow: 'unset',
    borderTop: '1px solid #c7c7c7',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4px 14px',
    background: 'transparent',
  },
  notifications: {},
  avatar: {
    marginLeft: '14px',
  },
});
