import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import NotFound from "./Screens/NotFound";
import Aos from "aos";
import SliderSide from "./Screens/PalyList/Pages/SliderSide";
import MusicsPage from "./Screens/PalyList/Pages/MusicsPage";
import Profile from "./Screens/Dashboard/Admin/Profile";
import Password from "./Screens/Dashboard/Admin/Password";
import mongoose from "mongoose"; // Import mongoose

function App() {
  useEffect(() => {
    // Connect to MongoDB
    mongoose.connect("mongodb://localhost:27017/your-database-name", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Handle connection events
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });

    // Clean up connection on unmount or application exit
    return () => {
      mongoose.disconnect();
      console.log("Disconnected from MongoDB");
    };
  }, []);

  Aos.init();

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/playlist" element={<SliderSide />} />
      <Route path="/musics" element={<MusicsPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/password" element={<Password />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
