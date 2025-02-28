import React, { useState } from "react";
import { Routes, Route } from "react-router";


import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsFormModalOpen(!isFormModalOpen)
  };

  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm handleCloseModal={handleCloseModal}/>} />
        <Route path="/card" element={<Card />} />
      </Routes>
      {/* FORGOT PASSWORD */}
      <ForgotPassword isFormModalOpen={isFormModalOpen} handleCloseModal={handleCloseModal}/>
    </div>

  );
}

export default App;
