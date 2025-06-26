import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Box, 
  Typography, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  keyframes
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ParasiteInfo = () => {

  const { parasiteInfo } = useAppContext();
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const renderTreatmentPhase = (phaseData, phaseTitle) => {
    if (!phaseData) return null;

    return (
      <Accordion defaultExpanded sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>
            {phaseTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ textAlign: 'left' }}>
          {Object.entries(phaseData).map(([key, value]) => (
            <Box key={key} mb={2} sx={{ textAlign: 'left' }}>
              <Typography variant="body1" component="div" sx={{ textAlign: 'left' }}>
                <strong>{key}. </strong>{value}
              </Typography>
              <Divider sx={{ my: 1 }} />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Box sx={{ padding: 3, textAlign: 'left' }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'left' }}>
        Malaria Treatment Information
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="language-select-label">Language</InputLabel>
        <Select
          labelId="language-select-label"
          value={language}
          label="Language"
          onChange={handleLanguageChange}
        >
          {Object.keys(parasiteInfo || {}).map((lang) => (
            <MenuItem key={lang} value={lang}>{lang}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {parasiteInfo && parasiteInfo[language] ? (
        <>
          {renderTreatmentPhase(parasiteInfo[language]['During Treatment'], 'During Treatment')}
          {renderTreatmentPhase(parasiteInfo[language]['After Completing Treatment'], 'After Completing Treatment')}
        </>
      ) : (
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: 'left' }}>
          No treatment information available.
        </Typography>
      )}
    </Box>
  );
};

export default ParasiteInfo;
