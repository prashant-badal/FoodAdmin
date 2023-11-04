import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Card } from '@mui/material';
 

import  VendorDetail from './VendorDetail';

const VendorTable = () => {
  return (
    <>
  
    <Card sx={{p:2,m:2}}>
    <Typography textAlign="center" variant='h4' color="error">Venders Details Table</Typography>
</Card>
    <TableContainer sx={{p:3}} component={Paper}>
      <Table sx={{border:"1px solid black"}}>
        <TableHead>
          <TableRow>
          <TableCell>Vendor Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Restaurant</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { VendorDetail.map((row, index) => (
            <TableRow 
            key={index}
            >
                <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.restaurant}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="secondary"
                //   onClick={() => handleRemove(row.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
        ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default VendorTable;
