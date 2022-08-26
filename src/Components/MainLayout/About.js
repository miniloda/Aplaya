import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "@fontsource/inter";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import { Typography } from '@mui/material';
const theme = createTheme({
    typography: {
    caption:{
        fontSize: 20,
        fontFamily: [
          "Memphis-LT-Std-Light",
        ].join(",")
    },

    }
  });
const About = () => {
    return (
        <Grid container id = "aboutContainer" spacing= {2} mt = {5}>
            <Grid item xs = {1} md = {3}>

            </Grid>
            <Grid item xs={10} md={6}>
            <Box mt = {0} sx ={{px:0, display: "flex", justifyContent : "center", flexDirection: "column", alignItems: "center"}} id = "aboutBox">
                <h1>About</h1>
                <ThemeProvider theme = {theme}>
                <Typography variant = "caption" className = "font-memphis" align = "center"> 
                We are a multimedia company striving to design the world a better place. <br></br>
                <br></br>
                Atque nesciunt fugiat consequatur quisquam at, facilis unde laborum pariatur laudantium ipsum nulla id quaerat repellat minima. Earum veritatis id neque quod?

                </Typography>

                </ThemeProvider>
            </Box>
        </Grid>
        </Grid>
    );
    }

    export default About;