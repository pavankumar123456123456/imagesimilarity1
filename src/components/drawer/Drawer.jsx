import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import MuiListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Navigation from "../../navigation/Navigation"
import { withRouter, useHistory, } from 'react-router-dom';
import { localRoute } from '../../routes/localRoutes';
import { styles } from "./DrawerStyle";
import { useConfirm } from "material-ui-confirm";
// import taskmoLogo from "../../assets/images/taskmoLogo.svg";

const useStyles = makeStyles(styles);

const ListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "#1E233A",
            borderRadius: '2px',
            border: '0.3px solid#1E233A',
            color: "#FFFFFF !important",
            "& .MuiListItemIcon-root": {
                color: "#FFFFFF",
            },
            "&& .makeStyles-drawerMenuIten-19 span":
            {
                fontWeight: 700,
                color: "#FFFFFF !important",
            }
        },
    },
    selected: {}
})(MuiListItem);

const DrawerUI = React.memo((props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const history = useHistory();
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [pageTitle, setPageTitle] = useState('');

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

        if (index === 0) {
            history.push(localRoute.rapidApi)
        }

        if (index === 1) {
            history.push(localRoute.senchaExpressApi)
        }

    };


    useEffect(() => {
        let total_url = window.location.pathname.split('/')
        let url = total_url[1];
        if (url === "rapid-api") {
            setSelectedIndex(0)
        }
        if (url === "sencha-express-api") {
            setSelectedIndex(1)
        }
    }, []);

    let pageTitlePath = history.location && history.location.pathname.split('/')

    useEffect(() => {
        let str = pageTitlePath && pageTitlePath[1].replace("-", " ")
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        setPageTitle(splitStr.join(' '))
    }, [pageTitlePath])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{ background: "#232940" }} >
                    <div className={classes.toolBar} >
                        {pageTitle === "" ? "RAPID API" : pageTitle.toLocaleUpperCase()}
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    {/* <img src={taskmoLogo} alt='noImage' style={{ width: "100%", height: "40px" }} /> */}
                </div>
                <List>
                    <ListItem button onClick={(event) => handleListItemClick(event, 0)} selected={selectedIndex === 0}>
                        <ListItemText primary="RAPID API" />
                    </ListItem>
                    <ListItem button onClick={(event) => handleListItemClick(event, 1)} selected={selectedIndex === 1}>
                        <ListItemText primary="SENCHA EXPRESS API" />
                    </ListItem>
                </List>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography paragraph>
                    <Navigation />
                </Typography>
            </main>
        </div>
    );
})
export default withRouter(DrawerUI)