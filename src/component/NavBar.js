// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  // Retrieve user info from local storage
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  return (
    <nav className="bg-blue-500 p-4 text-white mb-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">Order Management App</h1>
          </div>
          {userInfo && (
            <div className="flex items-center">
              <img
                src={userInfo.imageUrl}
                alt="User Avatar"
                className="rounded-full h-8 w-8 mr-2"
              />
              <p className="font-semibold">{`Logged in as ${userInfo.name}`}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
