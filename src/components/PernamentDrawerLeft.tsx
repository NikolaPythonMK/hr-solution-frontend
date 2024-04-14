import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import { sections } from '../utils/DrawerSections';
import NavBar from './NavBar';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import './PernamentDrawerLeft.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from './Dashboard/DashboardTabs/CustomTabPanel';




const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const navigate = useNavigate();

    const drawerSections = sections.map((s, index) => (
        <List key={index}>
            <ListItem disablePadding>               
                <ListItemButton onClick={() => navigate(`${s.url}`)}>
                    <ListItemIcon>
                        <s.icon></s.icon>
                    </ListItemIcon>
                    <ListItemText primary={s.name}></ListItemText>
                </ListItemButton>            
            </ListItem>
        </List>
    ))

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <NavBar></NavBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        

        {drawerSections}
        <Divider />
        
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText primary='Settings'></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>

        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default',  }}>
        <Toolbar />

        <div className='route-content-wrapper'>
          <div className='route-content'>
            <Outlet />
          </div>
        </div>

      </Box>
    </Box>
  );
}