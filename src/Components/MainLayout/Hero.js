import hero from "./assets/hero.jpg";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import heroSmall from "./assets/hero-small.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Hero = () => {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    useEffect(() => {
      return () => {
        // cleanup
      };
    }, []);
    const matches = useMediaQuery('(min-width:800px)');
    let screenWidth = window.innerWidth;
    let buttonWidth;
    useEffect(() => {
        const handleResize = () => {

         
        if (document.querySelector(".hero-content") !== null) {
            document.querySelector(".hero-content").style.left = window.innerWidth/2 - document.querySelector(".hero-content").offsetWidth/2 + "px";
            console.log(document.querySelector(".hero-content").offSetWidth)
        }
      }
      window.addEventListener("resize", handleResize);
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
        <Container maxWidth={false}  disableGutters={true} >
        <Box sx ={{px:0}} id = "hero-box">
            <img alt="hero" id = "hero-img"/>
            <Box className = "hero-content">
            <Box id = "social-media">
                <Link href="https://www.facebook.com/aplayamultimedia" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
                </Link>
                <Link href="https://www.instagram.com/aplaya" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                </Link>
                <Link href="mailto: aplayafilms@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="6769YB8EDCGhMGPdL9zwWa" x1="15.072" x2="24.111" y1="13.624" y2="24.129" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e3e3e3"/><stop offset="1" stop-color="#e2e2e2"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWa)" d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWb" x1="26.453" x2="36.17" y1="25.441" y2="37.643" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5"/><stop offset=".03" stop-color="#eee"/><stop offset="1" stop-color="#eee"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWb)" d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWc" x1="3" x2="45" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d74a39"/><stop offset="1" stop-color="#c73d28"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWc)" d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8	H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWd" x1="24" x2="24" y1="8" y2="38.181" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".15"/><stop offset="1" stop-opacity=".03"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWd)" d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969	C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWe" x1="3" x2="45" y1="17.73" y2="17.73" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWe)" d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278	C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z"/><linearGradient id="6769YB8EDCGhMGPdL9zwWf" x1="24" x2="24" y1="8.446" y2="27.811" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e05141"/><stop offset="1" stop-color="#de4735"/></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWf)" d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278	c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z"/></svg>
                </Link>
                </Box>
            <Link href = "#about"><button className = "get-started">Get Started</button></Link>
            {/* <Box id = "Owner" sx = {{display: "flex", alignItems: "center"}} >
            <p >For the owner of this company, please click <span onClick={handleOpen} class = "span-modal">this</span>.</p>
            </Box> */}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Disclaimer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This website is just a demo for a project I undertook to showcase in my portfolio. The website is not intended to be a real website; at least, not yet. My brother, Julian Leonard Usaraga, recommended me to make a website of Aplaya instead of his own. If you are the owner and is interested in making a website for Aplaya, please contact me at <Link href = "mailto: jacobmaximusu@gmail.com">jacobmaximusu@gmail</Link> or communicate with my brother. I would love to create your website. Thank you for your interest.
          </Typography>
        </Box>
      </Modal>
            </Box>
        </Container>
    );
}
export default Hero;