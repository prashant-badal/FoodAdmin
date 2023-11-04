import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, Container, Card } from '@mui/material';

const Update= () => {
  const [formData, setFormData] = useState({
    message: '',
    contactInfo: '',
    supportInfo: '',
    offers:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    // Send the formData to your API or update logic here
    console.log('Form data submitted:', formData);
  };

  return (

    <>
   
    <Card sx={{p:2,m:2}}>
    <Typography textAlign="center" variant='h4' color="error">Add New Updates/Notification</Typography>
</Card>
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Update Information
        </Typography>
        <form onSubmit={handleUpdate}>
          <TextField
         sx={{marginTop:2}}
            name="message"
            label="Message"
            fullWidth
            variant="outlined"
            value={formData.message}
            onChange={handleInputChange}
          />
          <TextField
         sx={{marginTop:2}}
            name="contactInfo"
            label="Contact Information"
            fullWidth
            variant="outlined"
            value={formData.contactInfo}
            onChange={handleInputChange}
          />
             <TextField
            sx={{marginTop:2}}
            name="offers"
            label=" New Offers "
            fullWidth
            variant="outlined"
            value={formData.offers}
            onChange={handleInputChange}
          />
          <TextField
        sx={{marginTop:2}}
            name="supportInfo"
            label="Support Information"
            fullWidth
            variant="outlined"
            value={formData.supportInfo}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Update
          </Button>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default Update;
