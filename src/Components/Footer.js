import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import React from 'react';
import Link from '@mui/material/Link';
const Footer = () => {
    return(
        <>
        <Box sx= {{height: "200px"}}></Box>
        <Grid container spacing={3} sx ={{position: "absolute", bottom: 0}}>
            <Grid item xs={12}>
                <Box sx = {{display: "flex", alignItems: "center", justifyContent: "center", width: "100%"}}>
                    <span>Designed and built by <Link href = "https://github.com/miniloda" noopener="true" target="_blank"> miniloda</Link></span>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Footer;