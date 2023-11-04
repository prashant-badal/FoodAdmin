import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  Container,
  Card,
} from '@mui/material';

const AddVendor = () => {
  const [vendor, setVendor] = useState({
    name: '',
    username:'',
    description: '',
    location: '',
    contact: '',
    openingDate:"",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setVendor({ ...vendor, image: imageFile });
  };

  const handleAddVendor = () => {
    // Handle the submission of the new vendor data here
    console.log('New vendor data:', vendor);
  };

  return (
    <>

    <Card sx={{p:2,m:2}}>
    <Typography textAlign="center" variant='h4' color="error">Add New Vendor</Typography>
</Card>
    <Container maxWidth="md">
        
      <Paper elevation={3} sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom>
          Add New Vendor
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Vendor Name"
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
               name=" username"
                label="Vendor UserName"
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="date" // Set the input type to "date"
                name="openingDate"
                // label="Opening Date"
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="location"
                label="Location"
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="contact"
                label="Contact Information"
                fullWidth
                variant="outlined"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                id="image-upload"
                onChange={handleImageChange}
              />
              <label htmlFor="image-upload">
                <Button variant="outlined" component="span">
                  Upload Image
                </Button>
              </label>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddVendor}
          >
            Add Vendor
          </Button>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default AddVendor;
