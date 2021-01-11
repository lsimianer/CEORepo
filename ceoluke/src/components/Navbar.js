import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
// locals
import hexLogo from '../images/hexLogo.png'

const useStyles = makeStyles((theme) => ({
    navbarMain:{
        height:"20vh"
        // paddingBottom:"0px"
    }
   
  }));


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
       
            <Grid container direction={"row"} spacing={0} id="navCon">                    
                <Grid item xs={2}>
                    <img id="navLogo" src={hexLogo} alt="gold hexagon with lightning in center is lukes logo"/>
                </Grid>
                <Grid item xs={2}>
                    <h1 className='headerText'>
                        Lukas Simianer
                    </h1>
                </Grid>
                <Grid item xs={2}>
                    <h4 className='headerText'>
                    media
                    </h4>
                </Grid>
                <Grid item xs={2}>
                    <h1 className='headerText'>
                    companies
                    </h1>
                </Grid>
                <Grid item xs={2}>
                    <h1 className='headerText'>
                    contact
                    </h1>
                </Grid>
                <Grid item xs={2}>
                    <h1 className='headerText'>
                    my story
                    </h1>
                </Grid>                
            </Grid>       
            
        </>
    );
}

export default Navbar;
