import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './Home'
import TaskTable from '../components/TaskTable/TaskTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function MyTask() {

const tabs = [
    {id:1,label:"All Tasks",component:<TaskTable status="all" />},
    {id:2,label:"Posted Task",component:<TaskTable status="posted" />},
    {id:3,label:"Booking Request",component:<TaskTable status="requested" />},
    {id:3,label:"Tasks Assigned",component:<TaskTable status="assigned" />},
    {id:3,label:"Pending Offers",component:<TaskTable status="pending" />},
    {id:3,label:"Task Completed",component:<TaskTable status="completed" />},
]

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar style={{backgroundColor:'white',color:'black'}} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {
              tabs.map((data,key)=>{
                  return <Tab label={data.label} {...a11yProps({key})} />
              })
          }
        </Tabs>
      </AppBar>
        {tabs.map((data,key)=>{
            return <TabPanel value={value} index={key} dir={theme.direction}>
                {data.component}
            </TabPanel>
        })}
    </Box>
  );
}