import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    <h1 className="text-4xl font-bold mb-4">Welcome to SoulStay</h1>
    <p className="text-lg mb-6">Book your perfect retreat and experience relaxation like never before.</p>
    <Button onClick={() => (window.location.href = "/login")} className="px-6 py-2 text-lg">Admin Login</Button>
  </div>
);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "soulstayteam" && password === "soulstayteam202328") {
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="p-6">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="mb-2" />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="mb-2" />
          <Button onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard = () => (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <p className="text-lg font-semibold">Total Bookings: 12</p>
      <p className="text-lg font-semibold">Total Earnings: ₹50,000</p>
    </div>
  </div>
);

export default App;
