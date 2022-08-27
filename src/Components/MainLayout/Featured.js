import featured from "../../assets/featured.mp4";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const Featured = () => {
    return (
        
        <div className="featured" id = "whatWeDo">
            <h1>What We Do</h1>
            <p className = "font-memphis">If a picture is worth a thousand words, then a video is worth a million. </p>
            <p >Check out our featured video!</p>
            <video controls>
                <source src={featured} type="video/mp4" />
            </video>
            <h4>IN SHORT</h4>
            <Typography variant="h3" component="p">
                We offer a wide range of services
            </Typography>
            <Container maxWidth = "false">
                <Box sx = {{display: "flex", justifyContent: "center", flexWrap: "wrap"}} className = "services-box">
                    <Paper elevation = {12} className = "services-paper">
                        <Box p={3} className = "services-box" sx = {{display:"flex", flexDirection : "column", alignItems : "center"}}>
                            <img src = {require("./assets/Services/photoshoot.webp")} alt = "photoshoot" />
                        <Typography variant="h5" component="p" gutterBottom className = "services-title">
                            Photography
                        </Typography>
                        <Typography variant="body1" component="p">
                            Photo Editing
                        </Typography>
                        <Typography variant="body1" component="p">
                            Aerial Photo
                        </Typography>
                        <Typography variant="body1" component="p">
                            Commercial Photo
                        </Typography>

                        </Box>
                    </Paper>
                    <Paper elevation = {12} className = "services-paper">
                        <Box p={3} className = "services-box" sx = {{display:"flex", flexDirection : "column", alignItems : "center"}}>
                            <img src = {require("./assets/Services/video.webp")} alt = "video" />
                        <Typography variant="h5" component="p" gutterBottom className = "services-title">
                            Videography
                        </Typography>
                        <Typography variant="body1" component="p">
                            Video Editing
                        </Typography>
                        <Typography variant="body1" component="p">
                            Video Production
                        </Typography>
                        <Typography variant="body1" component="p">
                            Aerial Video
                        </Typography>
                        <Typography variant="body1" component="p">
                            Commercial Video
                        </Typography>
                        <Typography variant="body1" component="p">
                            Music Scoring
                        </Typography>
                        </Box>
                     </Paper>
                    <Paper elevation = {12} className = "services-paper">
                        <Box p={3} className = "services-box" sx = {{display:"flex", flexDirection : "column", alignItems : "center"}}>
                            <img src = {require("./assets/Services/design.webp")} alt = "design" />
                        <Typography variant="h5" component="p" gutterBottom className = "services-title">
                            Design
                        </Typography>
                        <Typography variant="body1" component="p">
                            Graphics Design
                        </Typography>
                        <Typography variant="body1" component="p">
                            3D Graphics
                        </Typography>
                        <Typography variant="body1" component="p">
                            Business Logo Design
                        </Typography>
                        </Box>
                    </Paper>
                    <Paper elevation = {12} className = "services-paper">
                        <Box p={3} className = "services-box" sx = {{display:"flex", flexDirection : "column", alignItems : "center"}}>
                            <img src = {require("./assets/Services/events.webp")} alt = "events" />
                        <Typography variant="h5" component="p" gutterBottom className = "services-title">
                            Events
                        </Typography>
                        <Typography variant="body1" component="p">
                            Wedding
                        </Typography>
                        <Typography variant="body1" component="p">
                            Corporate Events
                        </Typography>
                        <Typography variant="body1" component="p">
                            Government Events
                        </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
}

export default Featured;