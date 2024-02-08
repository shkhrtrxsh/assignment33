// src/components/LoginPage.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login success!", res);

    // Store user info in local storage
    const userInfo = {
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    navigate("/dashbord");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login with Google</h2>
        <GoogleLogin
          clientId="908875032037-vmiu7aetf8q12j45bagivdm8fgojdsir.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={onSuccess}
          cookiePolicy={'single_host_origin'}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default LoginPage;


