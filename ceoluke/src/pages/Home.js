import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';// local imports
    
import hexLogo from '../images/hexLogo.png'
import FacePic from '../images/prettyPicture.jpg'


const useStyles = makeStyles(() => ({
    leftPanel:{      
      textAlign:"center",
      backgroundColor:"#454a52",
      color:"white",
      margin:"0px",
      padding:"5px",
      minHeight:"100vh"  
    },
    bodyPanel:{      
        textAlign:"center",
        backgroundColor:"black",
        color:"white",
        margin:"0px",
        padding:"5px",
        minHeight:"100vh"  
      },
      navBtn:{
          color:"white",
          marginTop:"30%",
          "&:hover": {
            // backgroundColor: 'rgb(7, 177, 77, 0.42)',
            color:"gold"
          }  
      },
      mainCon:{
          marginBottom:"0px",
          paddingBottom:"0px",
          height:"15vh"
      }
})
)

const Home = () => {
    const classes = useStyles();

    return (
        <>

            <Grid container direction={"row"} spacing={0}>                    
                    <Container id='navCon' className={classes.mainCon}>
                        <Grid container direction={"row"} spacing={0}>                    
                            <Grid item xs={2}>
                                <img id="navLogo" src={hexLogo} alt="gold hexagon with lightning in center is lukes logo"/>
                            </Grid>
                            <Grid item xs={10}>
                                <h1 className='headerText'>
                                    Lukas Simianer
                                </h1>
                                <p className='headerText'>VETERAN | C.E.O | ENGINEER | LEADER </p>
                            </Grid>                           
                        </Grid>

                    </Container>
                </Grid>
                
                <Grid container direction={"row"} spacing={0}>                    

                <Grid item xs={12}>
                    Media
                </Grid>

                <Grid item xs={12}>
                    Media
                </Grid>

                <Grid item xs={12}>
                    Companies
                </Grid>

                <Grid item xs={12}>
                    My Story
                </Grid>

                <Grid item xs={12}>
                    Contact
                </Grid>
            </Grid>

        </>
    );
}

export default Home;
