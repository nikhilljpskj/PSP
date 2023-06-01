import React from "react"
import { Route, Routes } from "react-router-dom";
import "./index.css"
import Login from "./routes/Login"
import Home from "./routes/Home"

import PurchaseOrder from "./pages/purchase_order/PurchaseOrder"
import ManagePo from "./pages/purchase_order/ManagePo"
import ViewPo from "./pages/purchase_order/ViewPo"
import CustomerOrder from "./pages/customer_order/CustomerOrder"
import ManageCo from "./pages/customer_order/ManageCo"
import ViewCo from "./pages/customer_order/ViewCo"
import Delivery from "./pages/delivery/Delivery"
import ManageDel from "./pages/delivery/ManageDel"
import Packing from "./pages/packing/Packing"
import ManagePack from "./pages/packing/ManagePack"
import BackOrder from "./pages/back_order/BackOrder"
import ManageBo from "./pages/back_order/ManageBo"
import ViewBo from "./pages/back_order/ViewBo"
import Receiving from "./pages/receiving/Receiving"
import ManageRec from "./pages/receiving/ManageRec"
import ViewRec from "./pages/receiving/ViewRec"
import Stocks from "./pages/stocks/Stocks"
import Return from "./pages/return/Return"
import ManageRet from "./pages/return/ManageRet"
import ViewRet from "./pages/return/ViewRet"
import Supplier from "./pages/supplier/Supplier"
import ManageSup from "./pages/supplier/ManageSup"
import ViewSup from "./pages/supplier/ViewSup"
import Customer from "./pages/customer/Customer"
import ManageCust from "./pages/customer/ManageCust"
import ViewCust from "./pages/customer/ViewCust"
import Item from './pages/item/Item'
import ManageItem from './pages/item/ManageItem'
import ViewItem from "./pages/item/ViewItem"
import UserList from "./pages/user/UserList";
import ManageUser from "./pages/user/ManageUser"
import UserProfile from "./pages/user/UserProfile"
import Settings from "./pages/account-settings/Settings"
import LogoutPage from  "./pages/exit/LogoutPage"
function App() {
return (
<>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />

<Route path="/purchase_order" element={<PurchaseOrder />} />
<Route path="/purchase_order/manage_po" element={<ManagePo />} />
<Route path="/purchase_order/view_po" element={<ViewPo />} />
<Route path="/customer_order" element={<CustomerOrder />} />
<Route path="/customer_order/manage_co" element={<ManageCo />} />
<Route path="/customer_order/view_co" element={<ViewCo />} />
<Route path="/delivery" element={<Delivery />} />
<Route path="/delivery/manage_del" element={<ManageDel />} />
<Route path="/packing" element={<Packing />} />
<Route path="/packing/manage_pack" element={<ManagePack />} />
<Route path="/back_order" element={<BackOrder />} />
<Route path="/back_order/manage_bo" element={<ManageBo />} />
<Route path="/back_order/view_bo" element={<ViewBo />} />

<Route path="/receiving" element={<Receiving />} />
<Route path="/receiving/manage_rec" element={<ManageRec />} />
<Route path="/receiving/view_rec" element={<ViewRec />} />
<Route path="/stocks" element={<Stocks />} />

<Route path="/return" element={<Return />} />
<Route path="/return/manage_ret" element={<ManageRet />} />
<Route path="/return/view_ret" element={<ViewRet />} />
<Route path="/supplier" element={<Supplier />} />
<Route path="/supplier/manage_sup" element={<ManageSup />} />
<Route path="/supplier/view_sup" element={<ViewSup />} />

<Route path="/customer" element={<Customer />} />

<Route path="/customer/manage_cust" element={<ManageCust />} />
<Route path="/customer/view_cust" element={<ViewCust />} />
<Route path="/item" element={<Item />} />
<Route path="/item/manage_item" element={<ManageItem />} />
<Route path="/item/view_item" element={<ViewItem />} />
<Route path="/userlist" element={<UserList />} />
<Route path="/user/manage_user" element={<ManageUser />} />
<Route path="/profile" element={<UserProfile />} />
<Route path="/settings" element={<Settings />} />
<Route path="/log" element={<LogoutPage />} />
</Routes>
</>
);
}

export default App;
