import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
// icons
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// locals   
import hexLogo from '../images/hexLogo.png'
import TabBar from '../components/TabBar'


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
      },
      bottomNavbar:{
        texAlign:"center",
        width:"100%",
        backgroundColor:"black",
        color:"white",
        alignItems:"center",
        paddingTop:"2%",
        marginTop:"2%",
        paddingBottom:"2%"

    },
    bottomNavText:{
        textAlign:"center"
    },
    paper: {
        textAlign: 'center',
        color: "white",
        backgroundColor:"Black"
    },
    bottomIcon:{
        fontSize:"300%",
        "&:hover": {
            color:"green" 
         },
    },
    noDecLink:{
        color:"white"
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
                    <TabBar/>
                </Grid>
            </Grid>

            <Grid container className={classes.bottomNavbar} spacing={0}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <a className={classes.noDecLink} target="_blank" href="https://ravenseye.io/">
                            <InstagramIcon className={classes.bottomIcon}/>
                        </a>
                        <a className={classes.noDecLink} target="_blank" href="https://ravenseye.io/">
                            <LinkedInIcon className={classes.bottomIcon}/>
                        </a>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        &copy; Lukas Simianer, all rights reserved 2021
                        </Paper>
                    </Grid>                   
            </Grid>

        </>
    );
}

export default Home;
