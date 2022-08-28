import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageGallery from 'react-image-gallery';
import Container from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography  from '@mui/material/Typography';
const useLink = (link) => {
  return `https://github.com/miniloda/Aplaya/blob/main/src/Components/MainLayout/assets/Gallery/Image${link}.jpg?raw=true`
}
const imageLinks = [1,2,3,4,5,6,7,8,9,10,11]
const images = imageLinks.map(link => (
  {original: useLink(link),
   thumbnail: useLink(link),
 
}
))
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function Gallery() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      
      <Container>
        <Box sx = {{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Photos" {...a11yProps(0)} />
          <Tab label="Videos" {...a11yProps(1)} />
          <Tab label="Others" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
 
        <ImageGallery items={images} showPlayButton = {false} showBullets = {true}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Videos
      </TabPanel>
      <TabPanel value={value} index={2}>
        Others
      </TabPanel>
    </Box>
        
      </Container>
    )

}