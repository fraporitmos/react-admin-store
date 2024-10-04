import React from 'react'
import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from '../pages/Home';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Users from '../pages/Users';
import SideBar from '../components/SideBar';

const AppLayout = () => {
  return (
    <div className='bg-blue-950 flex'>
      <SideBar/>
      <div className='bg-gray-950 w-full'>
        <Outlet />
      </div>
    </div>
  );
};

const RoutesStore = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
  ]);

export default RoutesStore