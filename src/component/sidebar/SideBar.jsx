import { Accordion, AccordionDetails, AccordionSummary, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import FormatListNumberedTwoToneIcon from '@mui/icons-material/FormatListNumberedTwoTone';

import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import StreetviewTwoToneIcon from '@mui/icons-material/StreetviewTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const [openProduct, setOpenProduct] = useState(true);
    const [openCustomer, setOpenCustomer] = useState(false);

   const handleToggle1=()=>
   {
    
    setOpenProduct(!openProduct);
   };

   
   const handleToggle2=()=>
   {
    
    setOpenCustomer(!openCustomer);
   }
  return (
   <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            
          <ListItemIcon>
           
            <h2>MYFood App</h2>
          
          </ListItemIcon>
        
         
        </ListSubheader>
      }
    >
        <Divider/>
        

      <Divider/>
        <ListItem disablePadding>

       {/* dashboard */}
      <ListItemButton 
      component={Link} to="/"
      >
            <ListItemIcon>
            <DashboardTwoToneIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>

<Divider/>
{/* Vender */}
<ListItemButton onClick={handleToggle1}>
        <ListItemIcon>
          <ProductionQuantityLimitsTwoToneIcon  />
        </ListItemIcon>
        <ListItemText primary="Venders" />
        {openProduct ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProduct} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {/*VenderList */}
          <ListItemButton sx={{ pl: 4 }} 
          component={Link} to="/vendor-list"
          >
            <ListItemIcon>
              <FormatListNumberedTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Vender List" />
          </ListItemButton>

           {/* ADD Vender */}
           <ListItemButton sx={{ pl: 4 }} 
           component={Link} to="/add-vendor"
           >
            <ListItemIcon>
              <FormatListNumberedTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary=" Add Vender " />
          </ListItemButton>

        </List>
      </Collapse>
  

      <Divider/>

{/* Product */}
<ListItemButton 
 component={Link} to="/product"
 >
     <ListItemIcon>
     <CreditScoreTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary="Product" />
 </ListItemButton>
     

{/* Transcation */}
<ListItemButton 
 component={Link} to="/transcation"
 >
     <ListItemIcon>
     <CreditScoreTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary="Transcation" />
 </ListItemButton>

 {/* Notication/updates */}
<ListItemButton
 component={Link} to="/notification">
     <ListItemIcon>
     <SendIcon />
     </ListItemIcon>
     <ListItemText primary="  Notication/updates" />
 </ListItemButton>


{/* Profile */}
<ListItemButton component={Link} to="/profile">
     <ListItemIcon>
     <AccountBoxTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary=" Profile " />
 </ListItemButton>


{/* Log Out */}
<ListItemButton 
component={Link} to="/login"
>
     <ListItemIcon>
     <LogoutTwoToneIcon />
     </ListItemIcon>
     <ListItemText primary=" Log Out" />
 </ListItemButton>

 <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Notes</Typography>
        </AccordionSummary>
    
        <Typography>
          All copy right reserved by AbhiRadhe
        </Typography>
     
      </Accordion>
  

</List>
   </>
  )
}

export default SideBar
