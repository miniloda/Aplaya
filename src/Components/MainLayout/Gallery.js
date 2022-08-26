import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Skeleton  from '@mui/material/Skeleton';
import { useEffect } from 'react';
const icon = (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="svg" sx={{ width: 100, height: 100 }}>
//       <Box
//         component="polygon"
//         sx={{
//           fill: (theme) => theme.palette.common.white,
//           stroke: (theme) => theme.palette.divider,
//           strokeWidth: 1,
//         }}
//         points="0,100 50,00, 100,100"
//       />
//     </Box>
//   </Paper>
    <Skeleton variant = "rectangular" animation = "wave" height = {400} width = {400} sx ={{backgroundColor: "#a1bcfc", mt: 2}}/>
);

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
    <Grid container spacing={3}>
        <Grid item xs={0} sm = {2}>
        </Grid>
        <Grid item xs={12} sm = {8}>
    <Box sx = {{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
        <h2>Gallery</h2>
    <Box sx ={{width: "100%"}}>
    <Box sx={{ width: "100%" }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex', justifyContent: "space-around", flexWrap : "wrap", alignItems: "center"}} id = "gallery">
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 1500} : {})}
        >
        {icon}
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 2000} : {})}
        >
        {icon}
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 2500} : {})}
        >
        {icon}
        </Grow>
        <Grow
          in = {checked}
        style = {{transformOrigin: '0 0 0'}}
        {...(checked ? {timeout: 3000} : {})}
        >
        {icon}
        </Grow>
        </Box>
      </Box>
    </Box>
    </Box>

        </Grid>
    </Grid>
  );
}
