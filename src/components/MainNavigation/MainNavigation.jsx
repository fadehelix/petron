import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { Logo } from '../Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    padding: theme.spacing(1),
  },
}));

const MainNavigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Logo />
          <Typography variant="h3" className={classes.title}>
            PetrON
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MainNavigation;
