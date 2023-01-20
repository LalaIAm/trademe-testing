import React from 'react';
import { Outlet } from 'react-router-dom';

const AppWrapper = () => {
  return (
    <div className='app'>
      <Outlet />
    </div>
  );
};

export default AppWrapper;
