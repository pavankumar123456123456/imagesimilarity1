const drawerWidth = 220;
export const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#232940',
        color: '#8D8B8B'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    toolBar: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        alignItems: "center",
        color: "white",
        fontSize: '30px',
        fontWeight: 600
    },
    divider: {
        height: "40px",
        width: "2px",
        background: "#CECCCC",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    profileInfo: {
        display: "flex",
        gap: "20px",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    welcomeText: {
        fontWeight: 400,
        fontSize: "12px",
        color: "#787171"
    },
    userName: {
        fontWeight: 500,
        fontSize: "16px",
        color: "#000000"
    }
})