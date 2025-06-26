import React from 'react';
import { Box, Typography, Grid, Paper, Button, Divider } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const About = () => {
  return (
    <Box sx={{ 
      maxWidth: 1200, 
      margin: '0 auto', 
      padding: 3,
      backgroundColor: '#f5f9ff'
    }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          color: '#2a4365',
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center'
        }}
      >
        Malaria Treatment Resources in Sri Lanka
      </Typography>

      {/* Anti-Malaria Campaign Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#1a365d', display: 'flex', alignItems: 'center' }}>
          <LocationOnIcon sx={{ mr: 1, color: '#e53e3e' }} />
          Anti-Malaria Campaign (AMC)
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: '#3182ce' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Hotline</Typography>
                <Typography>0117 626 626 / 071 284 1767</Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: '#3182ce' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Headquarters</Typography>
                <Typography>+94 (112) 369873, +94 (112) 368360</Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LanguageIcon sx={{ mr: 1, color: '#3182ce' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Website</Typography>
                <Button 
                  variant="text" 
                  href="http://www.malariacampaign.gov.lk/en/" 
                  target="_blank"
                  sx={{ textTransform: 'none', p: 0 }}
                >
                  www.malariacampaign.gov.lk
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Hospitals Section */}
      <Typography variant="h5" gutterBottom sx={{ color: '#1a365d', mb: 2 }}>
        <LocalHospitalIcon sx={{ mr: 1, color: '#e53e3e' }} />
        Recommended Hospitals for Malaria Treatment
      </Typography>

      <Grid container spacing={3}>
        {/* National Hospital */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#2c5282' }}>
              National Hospital of Sri Lanka, Colombo
            </Typography>
            <Typography paragraph>
              As the largest hospital in the country, it's likely to have experience managing imported malaria cases.
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LanguageIcon sx={{ mr: 1, color: '#3182ce' }} />
              <Button 
                variant="text" 
                href="http://www.nhsl.health.gov.lk/web/index.php?option=com_content&view=article&id=47&Itemid=165&lang=en" 
                target="_blank"
                sx={{ textTransform: 'none', p: 0 }}
              >
                Hospital Website
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Lanka Hospitals */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#2c5282' }}>
              Lanka Hospitals
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, color: '#3182ce' }} />
              <Typography>070 235 2211</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LanguageIcon sx={{ mr: 1, color: '#3182ce' }} />
              <Button 
                variant="text" 
                href="https://www.lankahospitals.com/contact/" 
                target="_blank"
                sx={{ textTransform: 'none', p: 0 }}
              >
                Contact Page
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Additional Resources */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          For emergencies, please call 1990 or visit the nearest hospital immediately.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;