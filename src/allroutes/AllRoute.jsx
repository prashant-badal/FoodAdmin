import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/dashboard/DashBoard'
import VendorData from '../pages/vendors/VendorData'
import AddNewVendor from '../pages/vendors/AddNewVendor'
import Product from '../pages/product/Product'
import AdminTransaction from '../pages/transaction/AdminTransaction'
import Notification from '../pages/notification/Notification'
import SignIn from '../component/signIn/SignIn'
import Profile from '../pages/profile/Profile'

const AllRoute = () => {
  return (
   <>
   <Routes>


   <Route path='/' element={<DashBoard/>}/>
   <Route path='/vendor-list' element={<VendorData/>}/>
   <Route path='/add-vendor' element={<AddNewVendor/>}/>
   <Route path='/add-vendor' element={<AddNewVendor/>}/>
   <Route path='/product' element={<Product/>}/>
   <Route path='/transcation' element={<AdminTransaction/>}/>
   <Route path='/notification' element={<Notification/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/login' element={<SignIn/>}/>
   </Routes>
   </>
  )
}

export default AllRoute
