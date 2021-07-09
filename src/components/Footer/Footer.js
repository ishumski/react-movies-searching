import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 100 + '%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});




export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    switch (value) {
      case (0):
        history.push('/trending');
        break;

      case (1):
        history.push('/movies');
        break;

      case (2):
        history.push('/series');
        break;

      case (3):
        history.push('/search');
        break;

      default:
        history.push('/trending');
        break;
    }
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Trending"
        icon={<WhatshotIcon />}
        style={{ color: '#ffffff' }}
      />

      <BottomNavigationAction
        label="Movies"
        icon={<MovieIcon />}
        style={{ color: '#ffffff' }} />

      <BottomNavigationAction
        label="TV Series"
        icon={<TvIcon />}
        style={{ color: '#ffffff' }} />

      <BottomNavigationAction
        label="Search"
        icon={<SearchIcon />}
        style={{ color: '#ffffff' }} />
    </BottomNavigation>
  );
}