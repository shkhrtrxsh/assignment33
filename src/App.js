import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './component/login';
import OrderForm from './component/OrderForm';
import OrderList from './component/OderList';
import NavBar from './component/NavBar';

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "908875032037-vmiu7aetf8q12j45bagivdm8fgojdsir.apps.googleusercontent.com",
        scope: "",
      });

      gapi.load('client:auth2', start);
    }

    // Call the start function to initialize gapi
    
  }, []); // Empty dependency array to run the effect only once

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* Navigate from the root to the login page */}
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/dashbord" element={<>
            <NavBar />
           
            <OrderForm />
            <OrderList />
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
