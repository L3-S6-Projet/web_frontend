import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {AccountCircle} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

ScrollableTabsButtonForce.propTypes = {
    name: PropTypes.string,
    classe: PropTypes.string,
    time: PropTypes.any
}
export default function ScrollableTabsButtonForce(props) {
    const {name, classe, time} = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Info"  {...a11yProps(0)} />
                    <Tab label="Enseignant" {...a11yProps(1)} />
                    <Tab label="Groupe" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="teacher-student-details-infos-title">
                    Informations
                </div>
                <List className="subjects-details-infos-list">
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircle/>
                        </ListItemIcon>
                        <ListItemText
                            primary={name}
                            secondary="Nom"/>
                    </ListItem>

                    <ListItem>
                        <ListItemText
                            primary={classe}
                            secondary="Classe"
                            inset/>
                    </ListItem>
                </List>

                <div className="teacher-student-details-infos-title">
                    Service
                </div>

                <div className="teacher-student-details-infos-service">
                    Le coût du service est de {time} heures.
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}
