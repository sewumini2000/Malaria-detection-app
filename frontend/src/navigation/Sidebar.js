import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Box,
  Toolbar,
} from '@mui/material';

const drawerWidth = 240;

const Sidebar = ({ onSelect }) => {
  const { setView } = useAppContext();
  const [active, setActive] = useState('parasitedetector');

  const handleSelect = (key, action) => {
    setActive(key);
    action(key);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1e1e2f',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {/* Title section */}
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#00e676',
            mb: 4,
            textTransform: 'uppercase',
          }}
        >
          Malaria Detection
        </Typography>
      </Box>

      {/* Menu buttons centered */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleSelect('parasitedetector', setView)}
              sx={{
                borderRadius: 1,
                backgroundColor: active === 'parasitedetector' ? '#00e67633' : 'transparent',
                '&:hover': {
                  backgroundColor: '#00e67644',
                },
                py: 2, 
              }}
            >
              <ListItemText primary="Parasite Detector" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ mt: 1 }}>
            <ListItemButton
              onClick={() => handleSelect('about', setView)}
              sx={{
                borderRadius: 1,
                backgroundColor: active === 'about' ? '#00e67633' : 'transparent',
                '&:hover': {
                  backgroundColor: '#00e67644',
                },
                py: 2, 
              }}
            >
              <ListItemText primary="Suggest Hospitals" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
