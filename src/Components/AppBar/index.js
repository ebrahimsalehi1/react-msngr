import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {IndexAppBarStyle} from "assets/Styles/IndexAppBarStyle";
import {withRouter} from "react-router-dom";
import List from "@material-ui/core/List/List";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Button from "@material-ui/core/Button/Button";
import {useLoginStateValue} from "Utils/StateManagement";

const styles = IndexAppBarStyle;

/**
 * create appbar section
 * @param props
 * @returns {*}
 * @constructor
 */
function MenuAppBar(props) {
    const [{authenticated}, dispatch] = useLoginStateValue();

    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton}
                                onClick={() => {
                                    dispatch({
                                        type: 'changeAuthenticate',
                                        authenticated: !authenticated
                                    })
                                }}
                                color="inherit"
                                aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {authenticated? `user is login` : `user is not login`}
                    </Typography>

                    <List classes={{root: classes.ListMenu}}>
                        <Button classes={{root: classes.ListItem}} onClick={() => props.history.push("/users")}>
                            <ListItemText primary={`Users`}/>
                        </Button>
                        <Button classes={{root: classes.ListItem}} onClick={() => props.history.push("/about")}>
                            <ListItemText primary={`About`}/>
                        </Button>
                        <Button classes={{root: classes.ListItem}} onClick={() => props.history.push("/")}>
                            <ListItemText primary={`Home`}/>
                        </Button>
                    </List>

                </Toolbar>
            </AppBar>
        </div>
    );

}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(MenuAppBar));
