import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import AddUserModel from "./components/AddUserModel";
import UpdateUserModel from "./components/UpdateUserModel";
import Contact from "./components/ContactModel";
import AlertProvider from "./Context/AlertProvider";

function App() {
  return (
    <>
      <AlertProvider>
        <Home />
      </AlertProvider>
    </>
  );
}

export default App;
