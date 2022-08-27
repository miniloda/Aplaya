import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import  Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react';

export default function Contact(){
  let formHeight;
  useEffect(() => {
    const handleResize = () => {
      console.log("resize?")
      if(document.querySelector("#field-grid") !== null){
        formHeight = document.querySelector("#field-grid").offsetHeight;
        document.querySelector(".contact-info").style.height = formHeight + "px";
      }
    }
    window.addEventListener("scroll", handleResize);
    handleResize();
    return () => {
        window.removeEventListener("scroll", handleResize);
    }
});

    return(
        <>
    <Container>
        <Box sx = {{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}} my = {5} >
            <h1>Interested? Contact Us!</h1>
        </Box>
    </Container>
    <Grid container spacing={0} gutterBottom id = "contact">
        <Grid item xs = {1} sm = {1} md = {1} lg={2} xl = {2}></Grid>
        <Grid item xs={12} sm = {10} md = {4} lg={3}>
        <div id="contact-container">
            <Paper elevation = {24} className = "paper cardField">
            <div className="contact-info">
                <h4>
                    Contact Information
                </h4>
                <p>Contact us in our social media accounts, email, phone number, or fill in the form and we will get back to you in 24 hours</p>
                <div className="icon-text">
                <i class="fa-solid fa-phone"></i>
                    <span>+63919 999 6897</span>
                </div>
                <div className="icon-text">
                <i class="fa-solid fa-envelope"></i>
                <span>aplayafilms@gmail.com</span>
                </div>
                <div className="icon-text">
                <i class="fa-solid fa-location-dot"></i>
                    <span>Tagbilaran City, Bohol</span>
                    </div>
                <div className="social-media">
                    <a href= "#" className="icon-circle">
                    <i class="fa-brands fa-facebook fa"></i>
                    </a>
                    <a href= "#" className="icon-circle">
                    <i class="fa-brands fa-instagram fa"></i>
                    </a>
                    <a href= "#" className="icon-circle">
                    <i class="fa-brands fa-twitter fa"></i>
                    </a>
                </div>
            </div>
        </Paper>
        </div>
        </Grid>
        <Grid item xs = {12} md = {5} id = "field-grid">
          <Paper elevation = {24} square className = "cardField">
        <Card style={{ padding: "20px 5px", margin: "0 auto" }} className = "cardField paper">
          <CardContent>
            <form>
              <Grid container spacing={1} >
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="filled" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="filled" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="filled" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="filled" fullWidth required />
                </Grid>
                <Grid item xs = {12}>
                <FormLabel id="demo-row-radio-buttons-group-label">Message Category</FormLabel>
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Query" />
                        <FormControlLabel value="male" control={<Radio />} label="Reservation" />
                        <FormControlLabel value="other" control={<Radio />} label="Concern" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="filled" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
            </Paper>
        </Grid>
        </Grid>
        <Container>
          <Box sx = {{display:"flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
              <h1>Our Location</h1>
              <iframe
              width="600"
              height="450"
              style={{border:0}}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/view?key=AIzaSyB0LOjKByCUtHYLqjnT-C7qy5fnDoQuIaA&center=9.672948,123.8730022&zoom=16&maptype=satellite"
              title = "Maps">
            </iframe>
          </Box>
        </Container>
        </>
    )
}