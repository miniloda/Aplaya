import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "@fontsource/inter";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import { Typography } from '@mui/material';
import {Transition} from "react-transition-group";
import {useState, useRef, useEffect} from "react";
import useOnScreen from '../shared/Observe';
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
    const elementRef = useRef(null)
  const  isOnScreen= useOnScreen(elementRef)
  console.log({isOnScreen})
    const [transitionState, setTransitionState] = useState(false)
    useEffect(() => {
        if(isOnScreen){
            document.querySelector("#about").classList.add("enter");
        }

      return () => {
        // cleanup
      };
    }, [isOnScreen]);

    return (

        <Grid container spacing= {2} mt = {5} id = "about" className = "not-seen" ref = {elementRef}>
            <Grid item xs = {1} md = {3}>

            </Grid>
            <Grid item xs={10} md={6}>
            <Box mt = {0} sx ={{px:0, display: "flex", justifyContent : "center", flexDirection: "column", alignItems: "center"}} id = "aboutBox">
                <h1>About</h1>
                <ThemeProvider theme = {theme}>
                <Typography variant = "caption" className = "font-memphis content" align = "center"> 
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