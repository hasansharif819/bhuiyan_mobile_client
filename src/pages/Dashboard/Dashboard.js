import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    {/* <h2 className='text-5xl text-primary'>Welcome</h2> */}
    <Outlet></Outlet>
  
  </div>
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/'>SAMSUNG</Link></li>
      <li><Link to='iphone'>IPHONE</Link></li>
      <li><Link to='xiaomi'>XIAOMI</Link></li>
      <li><Link to='oppo'>OPPO</Link></li>
      <li><Link to='vivo'>VIVO</Link></li>
      <li><Link to='realme'>REALME</Link></li>
      {/* { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
      { admin && <li><Link to="/dashboard/allOrders">All Orders</Link></li>}
      { admin && <li><Link to="/dashboard/addTools">Add Tools</Link></li>} */}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;