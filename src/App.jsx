import "./App.css";
import Home from "./components/Home";
import AddUserModel from "./components/AddUserModel";
import UpdateUserModel from "./components/UpdateUserModel";
import Contact from "./components/ContactModel";
import AlertProvider from "./Context/AlertProvider";
import MyTest from "./components/Test";
import RemoveModel from "./components/RemoveModel";
import { Notifications } from "react-push-notification";

import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      {/* <Notifications /> */}
      {/* <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        Notification Practice Work
      </h2> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />}>
            <Route path="about" element={<MyAbout />} />
            <Route path="contact" element={<MyContact />} />
            <Route path="*" element={<MyError />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <AlertProvider>
        <Home />
      </AlertProvider> */}
    </>
  );
}

export default App;
