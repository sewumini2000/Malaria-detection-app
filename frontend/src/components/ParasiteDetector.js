import React, { useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../context/AppContext';
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Input,
} from '@mui/material';

const ParasiteDetector = () => {
  const { prediction, setPrediction, setParasiteInfo, setView, parasiteInfo } = useAppContext();
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [accuracy, setAccuracy] = useState(null); // State to store accuracy

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert('Please upload an image');

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);

    try {
      const { data } = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPrediction(data.prediction);
      setAccuracy(data.accuracy); // Set the accuracy from the response
      setShow(true);

      if (data.prediction === 'Parasitized') {
        const response = await axios.get('http://127.0.0.1:5000/parasite_info');
        setParasiteInfo(response.data);
        console.log(response.data);
      } else {
        setParasiteInfo(null);
      }
    } catch (error) {
      console.error('Error during prediction:', error);
      alert('Error during prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="#f4f6f8"
      px={2}
    >
      <Box width="100%" maxWidth="600px" textAlign="center">
        <Typography variant="h3" fontWeight="bold" color="primary" mb={3}>
          Parasite Detection
        </Typography>

        {!show && (
          <form onSubmit={handleSubmit}>
            <Input
              type="file"
              onChange={handleImageChange}
              inputProps={{ accept: 'image/*' }}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.5, fontSize: '1rem', textTransform: 'none' }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload & Predict'}
            </Button>
          </form>
        )}

        {show && (
          <>
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Image Preview
              </Typography>
              <Box
                component="img"
                src={previewUrl}
                alt="Preview"
                sx={{
                  width: '100%',
                  maxHeight: 400,
                  borderRadius: 2,
                  objectFit: 'contain',
                  border: '1px solid #ccc',
                }}
              />
            </Box>

            <Box mt={4}>
              <Typography variant="h5" color="secondary" gutterBottom>
                Prediction: {prediction}
              </Typography>
              {accuracy && (
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Accuracy: {accuracy}%
                </Typography>
              )}

              {prediction === 'Parasitized' && (
                <Box display="flex" justifyContent="center" gap={2} mt={2}>
                  <Button
                    variant="outlined"
                    onClick={() => setView('parasiteinfo')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                        borderColor: '#1565c0',
                      },
                    }}
                  >
                    Show Info
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setImage(null);
                      setPreviewUrl(null);
                      setPrediction(null);
                      setAccuracy(null); // Reset accuracy
                      setShow(false);
                    }}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                        borderColor: '#1565c0',
                      },
                    }}
                  >
                    Make New Prediction
                  </Button>
                </Box>
              )}

              {prediction === 'Uninfected' && (
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setImage(null);
                      setPreviewUrl(null);
                      setPrediction(null);
                      setAccuracy(null); // Reset accuracy
                      setShow(false);
                    }}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      textTransform: 'none',
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                        borderColor: '#1565c0',
                      },
                    }}
                  >
                    Make New Prediction
                  </Button>
                </Box>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ParasiteDetector;
