import React, { useState } from 'react';
import { Avatar, Typography, Paper, Grid, IconButton, Button, TextField, Card } from '@mui/material';
import { Edit, LocationOn, Email, Phone, Work, Save } from '@mui/icons-material';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    phone: '+1234567890',
    location: 'Food App HQ, City',
  });
  const [profileImage, setProfileImage] = useState('/path-to-admin-image.jpg');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setProfileInfo({
      ...profileInfo,
      [field]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    
    <Card sx={{p:2,m:2}}>
    <Typography textAlign="center" variant='h4' color="error">View and Update Profile</Typography>
</Card>
    <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
        <label htmlFor="profile-image-input">
        <Avatar
              alt="Admin Name"
              src={profileImage}
              sx={{ width: 150, height: 150, cursor: 'pointer' }}
            />
            
            <input
              id="profile-image-input"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </label>
         
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="h4" component="div">
            {isEditing ? (
              <TextField
                value={profileInfo.name}
                onChange={(e) => handleChange('name', e.target.value)}
                fullWidth
              />
            ) : (
              profileInfo.name
            )}
          </Typography>
          <Typography variant="subtitle1" component="div">
            Food App Admin
          </Typography>
          {isEditing ? (
            <Button
              color="primary"
              startIcon={<Save />}
              onClick={handleSaveClick}
            >
              Save
            </Button>
          ) : (
            <IconButton color="primary" aria-label="edit profile" onClick={handleEditClick}>
              <Edit />
            </IconButton>
          )}
        </Grid>
      </Grid>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div">
          About Me
        </Typography>
        <Typography variant="body1" component="div">
          As an admin of the food app, I am responsible for managing and overseeing the operations to ensure the smooth functioning of the platform. I work closely with restaurants, delivery partners, and users to provide the best food delivery experience.
        </Typography>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div">
          Contact Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Email />
            {isEditing ? (
              <TextField
                value={profileInfo.email}
                onChange={(e) => handleChange('email', e.target.value)}
                fullWidth
              />
            ) : (
              profileInfo.email
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Phone />
            {isEditing ? (
              <TextField
                value={profileInfo.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                fullWidth
              />
            ) : (
              profileInfo.phone
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocationOn />
            {isEditing ? (
              <TextField
                value={profileInfo.location}
                onChange={(e) => handleChange('location', e.target.value)}
                fullWidth
              />
            ) : (
              profileInfo.location
            )}
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6" component="div">
          Work Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Work />
            <Typography variant="body1" component="div">
              Food App Administration
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Paper>
    </>
  );
};

export default AdminProfile;
