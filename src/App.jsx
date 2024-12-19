import "./App.css";
import ChatModule from "./components/Chat/ChatModule";
import AlertProvider from "./Context/AlertProvider";
import { Notifications } from "react-push-notification";
import { BrowserRouter, Route, Routes } from "react-router";
import EmailModule from "./components/Email/EmailModule";
import InboxModule from "./components/Email/Inbox/InboxModule";
import SendModule from "./components/Email/Send/SendModule";
import FavouriteModule from "./components/Email/Favourite/FavouriteModule";
import DraftModule from "./components/Email/Draft/DraftModule";
import TrashModule from "./components/Email/Trash/TrashModule";

function App() {
  return (
    <>
      {/* <Notifications /> */}

      <BrowserRouter>
        <AlertProvider>
          <Routes>
            <Route path="/" element={<EmailModule />}>
              <Route path="Inbox" element={<InboxModule />} />
              <Route path="Send" element={<SendModule />} />
              <Route path="Draft" element={<DraftModule />} />
              <Route path="Favourite" element={<FavouriteModule />} />
              <Route path="Trash" element={<TrashModule />} />
              <Route path="*" element={"Error"} />
            </Route>
          </Routes>
        </AlertProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
