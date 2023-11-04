import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Grid, Avatar } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // You can add your authentication logic here
    // For example, send a request to your server to authenticate the admin
  };

  return (
    <Card variant="outlined" style={{ maxWidth: 400, margin: '0 auto', marginTop: 50 }}>
      <CardContent style={{  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          sx={{ bgcolor: 'primary.main', margin: '20px' }}
        >
            mm
          {/* <LockOutlined /> */}
        </Avatar>
        <Typography variant="h5" component="div" align="center">
          Admin Sign In
        </Typography>
        <form>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" color="primary" 
            //   onClick={handleSignIn}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Forgot Password
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignIn;
