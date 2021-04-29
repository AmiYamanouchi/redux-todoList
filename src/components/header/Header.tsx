import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './Header.module.scss';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';



const Header: React.FC = () => {
    return (
        <div className={styles.root}>
          <AppBar position="static" className={styles.app_bar}>
            <Toolbar className={styles.tool_bar}>
              {/* <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <Typography variant="h6" className={styles.title}>
                Redux Todo List
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default Header
