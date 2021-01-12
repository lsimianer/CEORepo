import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typist from 'react-typist';

const useStyles = makeStyles((theme) => ({
    headerText: {
        color:"black",
        fontFamily: "'Oswald', sans-serif",
        // fontSize:"2rem"
    },
    textCon:{
        width:"100%",
        display:"flex",
        justifyContent:"center"
    },
    centerMe:{
        width:"80%"
    }
    
  }));

const Story = () => {
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
                <Container className={classes.centerMe}>
                <Typist>
                    <Typist.Delay ms={1500} />
                    <p id="storyHeaderText">
                        Name: &nbsp;
                        <Typist.Delay ms={1500} />
                        Lukas Simianer
                        
                        {/* <br/> */}
                        <br/>
                        <Typist.Delay ms={1000} />
                        Hometown: &nbsp;
                        <Typist.Delay ms={1500} />
                        Scottsbluff, NE 
                        <br/>
                        <Typist.Delay ms={1000} />
                        Age: &nbsp;
                        <Typist.Delay ms={1500} />
                        28   
                        <br/>
                        <Typist.Delay ms={1000} />
                        Awards: &nbsp;
                        <Typist.Delay ms={1500} />
                        Purple Heart Recipient, 
                        Presidential Civic Honors Medal,
                        Army Commendation Medal,
                        Parachutist Badge                         
                        <br/>
                    </p>
                </Typist>
                    <p id="storyHeaderText">
                        BIO: &nbsp;
                        From humble beginnings, Lukas was raised by his mom and grandma.
                        Lukas Struggled in school as he was diagnosed with severe dyslexia at the age of 6. 
                        In the early 2000's dyslexia was still treated as a form of retardation. Thus, Lukas was
                        placed in perptually remedial classes teaching him to dislike school and distrust the sytems 
                        society placed in control. 
                        Little did Luke know this would end up being his greatest strength and tool.
                        <br/>
                        <br/>
                        At 17 Lukas joined the Army to become a Cavalry Scout. He went on to graduate airborne school and become a paratrooper
                        while still only 17 years old. In 2012 Lukas deployed to Afghanistan where he was later wounded. 
                        <br/>
                        <br/>
                        After the Army Luke wandered around the midwest job by job wondering what was next until he took an 
                        opportunity to work counter narcotics missions as a contractor and advisor in Colombia. 
                        Wildly unqualified for such a senior position aside from small unit tactics he learned in the Army. Luke was
                        thrust into unconventional warfare with a language barrier and a penchant for kinetic gun play too often for his liking. 
                        Luke fell in love with Colombia and it's people but knew he must returm to the states and build his life less he'd
                        be stuck risking life and limb far from home every day for his keep. 
                        <br/>
                        <br/>
                        Back in the states with renewed direction Luke hit the ground with a new found sense of direction, he didn't know where he was going but it surely was up. 
                        In college Luke proved his old teachers wrong by making the presidnets list every semester, even adding credits to the point of an 16 credit semester just to see if
                        he could still get his 4.0.
                        <br/>
                        <br/>
                        Luke learned that he loved challenge and found purpose in defying the odds when presented an 
                        opportunity to do so. This led to quite the wild ride and Luke eventually ending with software engineering the
                        art he would master and use to build the life he endeavored to have.
                        <br/>
                        <br/>
                        Flash forward a few years and Luke has founded Ravenseye.io a technology firm improving the world for visually impaired and blind people. 
                        Luke also heads up the engineering team at Talinnt and has consulted with companies like BigCommerce and Bumble regarding accessibility and engineering.
                    </p>
                </Container>
            </Grid> 
        </Grid>
        </>
    );
}

export default Story;
