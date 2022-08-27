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

export default function Contact(){
    return(
    <>
        <Container>
    <Box sx ={{height: 100}}>
        <div height = "100px"></div>
    </Box>
</Container>
    <Grid container spacing = {3} mt = {5} id = "contact">
        <Grid item xs = {0} sm = {4}></Grid>
        <Grid item xs = {12} sm = {4}>
          <Paper elevation = {24} square >
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", bgcolor : "primary" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and we will try our best to get back to you within 24 hours.
          </Typography>
            <form>
              <Grid container spacing={1} >
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
            </Paper>
        </Grid>

      </Grid>
      </>
    )

}