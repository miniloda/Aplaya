import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Skeleton  from '@mui/material/Skeleton';
import { useEffect } from 'react';
import Image1 from "./assets/Gallery/Image1.jpg";
import Image2 from "./assets/Gallery/Image2.jpg";
import Image3 from "./assets/Gallery/Image3.jpg";
import Image4 from "./assets/Gallery/Image4.jpg";
import Image5 from "./assets/Gallery/Image5.jpg";
import Image6 from "./assets/Gallery/Image6.jpg";
<Skeleton variant = "rectangular" animation = "wave" sx ={{backgroundColor: "#a1bcfc", mt: 2, height: {xs: 200, sm: 400}, width: {xs: 200, sm: 400}}}/>

export default function Gallery() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    
  };
  useEffect(() => {
    if(!checked){
        document.getElementById("gallery").style.height = "200px";

    }else{
        document.getElementById("gallery").style.height = "auto";
    }
  }, [checked]);
  return (
    <Grid container spacing={0} gutterBottom sx ={{px:{sm:0}}}>
        <Grid item xs={0} sm = {2}>
        </Grid>
        <Grid item xs={12} sm = {8} sx ={{px:0}}>
    <Box sx = {{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
        <h1>Gallery</h1>
    <Box sx ={{width: "100%"}}>
    <Box sx={{ width: "100%" }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex', justifyContent: "space-around", flexWrap : "wrap", alignItems: "center"}} id = "gallery">
        <Grow in={checked}>
          <img src = {Image1} alt = "Image1" />
        </Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <img src = {Image2} alt = "Image2" />
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 1500} : {})}
        >
          <img src = {Image3} alt = "Image3" />
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 2000} : {})}
        >
          <img src = {Image4} alt = "Image4" />
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 2500} : {})}
        >
          <img src = {Image5} alt = "Image2" />
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 3000} : {})}
        >
          <img src = {Image6} alt = "Image3" />
        </Grow>
        </Box>
      </Box>
    </Box>
    </Box>

        </Grid>
    </Grid>
  );
}
