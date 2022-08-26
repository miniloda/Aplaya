import hero from "./assets/hero.jpg";
import { useState } from "react";
import { useEffect, useLayoutEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import heroSmall from "./assets/hero-small.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [image, setImage] = useState(null);
    const matches = useMediaQuery('(min-width:800px)');
    let screenWidth = window.innerWidth;
    let buttonWidth;
    useEffect(() => {
        const handleResize = () => {

        screenWidth = window.innerWidth;
        console.log(screenWidth);
        console.log(document.getElementById("heroButton"))
        if (document.getElementById("heroButton") !== null) {
            buttonWidth = document.getElementById("heroButton").offsetWidth;
            document.getElementById("heroButton").style.right = screenWidth /2 - buttonWidth/2 + "px";
        }
        window.addEventListener("resize", handleResize);
        }
        let image = document.getElementById("hero-img");
        if (matches === true) {
            if(image!=null){
                image.src = hero;
            }
        } else {
            if(image!=null){
                image.src = heroSmall;
            }
        }
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    return (
        <Container maxWidth={false}  disableGutters={true}>
        <Box mt = {0} sx ={{px:0}} id = "hero-box">
            <img alt="hero" id = "hero-img"/>
            <Button variant="outlined" id = "heroButton" disableElevation sx = {{position: "absolute", bottom: 200}}>Get Started</Button>
        </Box>
        </Container>
    );
}

export default Hero;