import React from 'react';
import { RouterProvider } from "react-router-dom";
import RoutesStore from './routes/RoutesStore';

const App = () => {
  return <RouterProvider router={RoutesStore} />;
};

export default App;
