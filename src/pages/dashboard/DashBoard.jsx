
import React from 'react'
import IncomeWidget from '../../component/widgets/IncomeWidget'
import NavBar from '../../component/navbar/NavBar'
import { Box, Card, Typography } from '@mui/material'
import TransactionTable from '../../component/transactiontable/TransactionTable'
import VendorTable from '../../component/vendor/VendorTable'

const DashBoard = () => {
  return (
    <>
    <NavBar>
    <Card sx={{p:2,m:2}}>
            <Typography variant="h4"  color="error">Cards for Alerts</Typography>
        </Card>
    <Box 
sx={{p:2,display:"flex",justifyContent:{
    lg:"space-between",
    xs:"space-evenly"
},flexWrap:"wrap"  }}
>

   <IncomeWidget/>
</Box>


<Box>


        <TransactionTable/>



</Box>


<Box>


        <VendorTable/>



</Box>
 
    </NavBar>
 
    
    </>
  )
}

export default DashBoard
