import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// locals
import TallintLogo from '../images/TallintLogo.png'
import RavensEyeHead from '../images/RavensEyeHead.jpg'

const useStyles = makeStyles((theme) => ({
    navbarMain:{
        height:"20vh"
        // paddingBottom:"0px"
    },
    tabLabel: {
        color:"black",
        fontFamily: "'Oswald', sans-serif",
        fontSize:22
    },
    workCon:{
        textAlign:"center"
    },
    CardCon:{
        borderRadius:"10px",
        border:"1px solid #ccc",
        transition:"0.5s",
        fontFamily: "'Oswald', sans-serif",
        backgroundColor:"white",
        width:"70%",
        paddingBottom:"2%",
        "&:hover": {
            boxShadow:" 0 0 11px rgba(33,33,33,.2)" 
         },
    },    
      cover: {
        height: 121,
        width:130,
        margin:"5%"
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: theme.spacing(1),
        // paddingBottom: theme.spacing(1),
      },
      noDecLink:{
          textDecoration:"none",
          fontFamily: "'Oswald', sans-serif",
          color:"black",
          transition:"1.0s",
          "&:hover": {
            letterSpacing:"3px",
            color:"green" 
         },
      }   
  }));


const Work = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container
             className={classes.workCon}
             direction={"row"}
              spacing={5}> 
                <Grid item xs={12}>
                 <Container className={classes.CardCon}>
                    <Grid container direction={"row"} spacing={0}>
                        <Grid item xs={12}>
                            <h2 className={classes.cardHead}>
                                RavensEye | CEO & Founder
                            </h2>
                            {/* <h4 className={classes.cardSubHeader}>
                                CEO & Founder
                            </h4> */}
                            <p className={classes.cardDesc}>
                            Revolutionizing the way the visually imapired and blind community recieves technical job training.
                            </p>
                        </Grid>
                        <Grid item xs={12} >
                            <img src={RavensEyeHead} alt="ravenseye logo"/>
                        </Grid>
                        <Grid item xs={12}>
                            <a className={classes.noDecLink} target="_blank" href="https://ravenseye.io/">Learn More</a>
                        </Grid>
                    </Grid>
                 </Container>
                </Grid>

                <Grid item xs={12}>
                 <Container className={classes.CardCon}>
                    <Grid container direction={"row"} spacing={0}>
                        <Grid item xs={12}>
                            <h2 className={classes.cardHead}>
                                Talinnt | Principal Architect
                            </h2>
                            {/* <h4 className={classes.cardSubHeader}>
                                Principal Architect
                            </h4> */}
                            <p className={classes.cardDesc}>
                            Talinnt equips recruitment and hiring professionals with a new lens for viewing candidates.
                            </p>
                        </Grid>
                        <Grid item xs={12} >
                            <img src={TallintLogo} alt="Tallint logo"/>
                        </Grid>
                        <Grid item xs={12}>
                            <a className={classes.noDecLink} target="_blank" href="https://talinnt.com/">Learn More</a>
                        </Grid>
                    </Grid>
                 </Container>
                </Grid>

            </Grid>
        </>
    );
}

export default Work;
