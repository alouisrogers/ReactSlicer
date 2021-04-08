import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Grid, TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import ButtonBase from '@material-ui/core/ButtonBase'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ClearAll from '@material-ui/icons/ClearAll';
import { Canvas } from '@react-three/fiber'
import { PartView } from './components/PartView'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 750,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Standard Layer" {...a11yProps(0)} />
        <Tab label="Bottom Layer" {...a11yProps(1)} />
        <Tab label="Top Layer" {...a11yProps(2)} />
        <Tab label="Materials" {...a11yProps(3)} />
        <Tab label="Choose Profile" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container direction='column'>
          <TextField label='Layer Height'></TextField>
          <TextField label='Perimeter Count'></TextField>
          <TextField label='Inner Perimeter Width'></TextField>
          <TextField label='Outer Perimeter Width'></TextField>
          <TextField label='Infill Percentage'></TextField>
          <TextField label='Infill Overlap'></TextField>
          <TextField label='Perimeter Speed'></TextField>
          <TextField label='Outer Perimeter Speed'></TextField>
          <TextField label='Infill Speed'></TextField>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container direction='column'>
          <TextField label='Bottom Extrusion Factor'></TextField>
          <TextField label='Bottom Shells'></TextField>
          <TextField label='Brim Width'></TextField>
          <TextField label='First Layer Speed'></TextField>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container direction='column'>
          <TextField label='Top Extrusion Factor'></TextField>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container direction='column'>
          <TextField label='Hotend Temperature'></TextField>
          <TextField label='Bed Temperature'></TextField>
          <TextField label='Fan Speed'></TextField>
          <TextField label='Filament Diameter'></TextField>
          <TextField label='Nozzle Diameter'></TextField>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        IMPLEMENT THIS LATER
      </TabPanel>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar color = 'secondary'>
          <Toolbar>
            <Typography variant='h4'>
              Axi5 Slicer
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item lg={12} lg container>
            <Grid item lg container direction="column" spacing={2}>
              <Grid >
              <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                <Button variant='contained' startIcon={<CloudUploadIcon/>}> Upload STL </Button>
                <Button variant='contained' startIcon={<ClearAll/>}> Slice Part </Button>
                <Button variant='contained' startIcon={<SaveIcon/>}> Download GCode </Button>
              </ButtonGroup>
              </Grid>
              <Grid container>
                <Paper style={{height:700, width:800}}>
                 
                </Paper>
              </Grid>
            </Grid>
            <Grid item>
                <Paper style={{height:800, width:400}}>
                    <VerticalTabs/>
                    <Button variant='contained' color='secondary'>
                      Save Settings As Profile
                    </Button>
                </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
        
      </header>
    </div>
  );
}

export default App;
