import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  TextField,
  Typography,
  Badge,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdSearch, MdNotifications } from 'react-icons/md';

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography className={classes.logo} variant="h6" color="textPrimary">
          Socinet
        </Typography>
        <TextField
          className={classes.search}
          variant="outlined"
          size="small"
          label={<MdSearch />}
          type="search"
        />
        <Badge
          className={classes.notifications}
          badgeContent={4}
          color="secondary"
        >
          <IconButton style={{ padding: '5px' }}>
            <MdNotifications fontSize="20" />
          </IconButton>
        </Badge>
        <IconButton
          style={{ padding: '0', marginLeft: '14px' }}
          onClick={handleProfileClick}
        >
          <Avatar />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    background: 'rgba(255,255,255,0.1)',
    width: '100%',
    position: 'fixed',
    backdropFilter: 'blur(6px)',
    boxShadow: 'unset',
    borderBottom: '1px solid #c7c7c7',
  },
  toolbar: {
    justifyContent: 'space-between',
    padding: '6px 14px',
  },
  logo: {
    marginRight: '14px',
  },
  search: {
    flex: 1,
  },
  notifications: {
    marginLeft: '14px',
  },
});
