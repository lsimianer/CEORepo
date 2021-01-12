import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typist from 'react-typist';
import EmailIcon from '@material-ui/icons/Email';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardHead: {
        color:"black",
        fontFamily: "'Oswald', sans-serif",
        fontSize:"2rem"
    },
    textCon:{
        width:"100%",
        display:"flex",
        justifyContent:"center"
    },
    contactCon:{
        display:"flex",
        justifyContent:"center",
        textAlign:"center",
        minHeight:"100vh"
    },
    mediaDivider:{
        width:"95%",
        // backgroundColor:"black",
        // color:"white",
        borderRadius:"10px",
        textAlign:"center",
        height:"70px",
        display: "flex",
      //   flexDirection: "column",
        justifyContent: "center",
        paddingTop:"2%",
        fontSize:"36 px"
    }   
    
  }));
const Contact = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container
             className={classes.textCon}
                direction={"row"}
                spacing={0}
                justify="center"
            >
                <Grid item xs={12}>
                    <Container className={classes.contactCon}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Typography className={classes.cardHead}>
                                Contact Lukas
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <br/>
                            <br/>
                            <Container className={classes.mediaDivider}>
                                <EmailIcon className={classes.bottomIcon}/>
                                Luke@RavensEye.io
                            </Container>
                        </Grid>
                    </Grid>
                    </Container>
                </Grid>
            </Grid>

        </>
    );
}

export default Contact;
