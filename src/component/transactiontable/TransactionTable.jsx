import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Card,
} from '@mui/material';
import transactions from './TransDetail'; 

const TransactionTable = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleViewHistory = (transaction) => {
    setSelectedTransaction(transaction);
    setOpenDialog(true);
  };

  return (
    <div>
        
    <Card sx={{p:2,m:2}}>
    <Typography textAlign="center" variant='h4' color="error">View Transactions of Vendors</Typography>
</Card>    
      <TableContainer sx={{p:5}} component={Paper}>
        <Table sx={{border:"1px solid black"}}>
          <TableHead>
            <TableRow>
              <TableCell>Vendor ID</TableCell>
              <TableCell>Name</TableCell>
              {/* <TableCell>User</TableCell> */}
              <TableCell>Date</TableCell>
              <TableCell>Transaction ID</TableCell>
              
              <TableCell>Amount</TableCell>
              <TableCell>Mode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.Vid}>
                <TableCell>{transaction.Vid}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.username}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                
                
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>${transaction.mode}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewHistory(transaction)}
                  >
                    View History
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Transaction History Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Transaction History</DialogTitle>
        <DialogContent>
          {selectedTransaction && (
            <div>





              <Typography variant="h6" gutterBottom>
               Vendor ID: {selectedTransaction.Vid}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Vendor Name: {selectedTransaction.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Vendor username: {selectedTransaction.username}
              </Typography>
              <Typography>Date: {selectedTransaction.date}</Typography>
              <Typography>Transcation Id: {selectedTransaction.amount}</Typography>
              <Typography>Last Month Amount: ${selectedTransaction.amount}</Typography>

              
              {/* Include additional transaction details as needed */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TransactionTable;
