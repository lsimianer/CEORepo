import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

// locals
import Work from "./Work"
import Media from "./Media"
import Story from "./Story"
import Contact from "./Contact"


const useStyles = makeStyles((theme) => ({
    navbarMain:{
        height:"20vh"
        // paddingBottom:"0px"
    },
    tabLabel: {
        color:"black",
        fontFamily: "'Oswald', sans-serif",
        fontSize:22
    }   
  }));


// begin tab controller
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

// end tab controllers

const TabBar = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
   

    return (
        <>       
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="black"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    centered
                    >
                    <Tab label={<span className={classes.tabLabel}>Work</span>}{...a11yProps(0)} />
                    <Tab label={<span className={classes.tabLabel}>Media</span>}{...a11yProps(1)} />
                    <Tab label={<span className={classes.tabLabel}>Story</span>}{...a11yProps(2)} />
                    <Tab label={<span className={classes.tabLabel}>Contact</span>}{...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    // axis={direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} >
                        <Work/>
                    </TabPanel>

                    <TabPanel value={value} index={1} >
                        <Media/>
                    </TabPanel>

                    <TabPanel value={value} index={2} >
                        <Story/>
                    </TabPanel>

                    <TabPanel value={value} index={3} >
                        <Contact/>
                    </TabPanel>
                </SwipeableViews>
            </div>            
        </>
    );
}

export default TabBar;
