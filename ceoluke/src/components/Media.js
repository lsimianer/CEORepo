import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
    
    workCon:{
        textAlign:"center"
    },
    CardCon:{
        borderRadius:"10px",
        border:"1px solid #ccc",
        transition:"0.5s",
        fontFamily: "'Oswald', sans-serif",
        backgroundColor:"black",
        width:"100%",
        paddingBottom:"2%",
        paddingTop:"4%",
        display:"flex",
        justifyContent:"center",
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
      },
      mediaDivider:{
          width:"95%",
          backgroundColor:"black",
          color:"white",
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


const Media = () => {
    const classes = useStyles();


    return (
        <>
            
            <Grid container
            //  className={classes.workCon}
                direction={"row"}
                spacing={10}
                justify="center"
              > 
              <Grid item xs={12}>
                    <Container className={classes.mediaDivider}>
                        <YouTubeIcon className={classes.bottomIcon}/>Youtube Interviews
                    </Container>
                </Grid>

                <Grid item xs={12}>  
                    <Container className={classes.CardCon}>
                        <iframe 
                        width="100%" 
                        src="https://www.youtube.com/embed/sPkq23Fsfhs"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        />
                    </Container>
                </Grid>

                <Grid item xs={12}>
                    <Container className={classes.mediaDivider}>
                    <InstagramIcon className={classes.bottomIcon}/>Instagram
                    </Container>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Container className={classes.CardCon}>
                        <InstagramEmbed
                        clientAccessToken='149577950110534|19e62e92693aa2b7ccfbcaf405d52696'
                        url='https://www.instagram.com/p/CJzVW48HDlF/'
                        maxWidth={375}
                        hideCaption={true}
                        containerTagName='span'
                        injectScript
                        protocol=''
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                    </Container>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Container className={classes.CardCon}>
                        <InstagramEmbed
                        clientAccessToken='149577950110534|19e62e92693aa2b7ccfbcaf405d52696'
                        url='https://www.instagram.com/p/CJ4gBaMnAAe/'
                        maxWidth={375}
                        hideCaption={true}
                        containerTagName='span'
                        injectScript
                        protocol=''
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                    </Container>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Container className={classes.CardCon}>
                        <InstagramEmbed
                        clientAccessToken='149577950110534|19e62e92693aa2b7ccfbcaf405d52696'
                        url='https://www.instagram.com/p/CJ9M1C-HQJE/'
                        maxWidth={375}
                        hideCaption={true}
                        containerTagName='span'
                        injectScript
                        protocol=''
                        onLoading={() => {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
            

        </>
    );
}

export default Media;
