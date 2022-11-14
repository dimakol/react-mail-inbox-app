import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faHome,
  faEnvelope,
  faEnvelopeOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "./hooks";
import { messagesActions } from "./store/messages-slice";

import Home from "./pages/Home/Home";
import MessageList from "./pages/MessageList/MessageList";
import Message from "./pages/Message/Message";

library.add(faArrowLeft, faHome, faEnvelope, faEnvelopeOpen, faTrash);

function App() {
  const dispatch = useAppDispatch();

  const getMessages = () => {
    fetch("/json/messages.json")
      .then((response) => {
        return response.json();
      })
      .then((messages) => {
        dispatch(messagesActions.setInbox({ messages }));
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<MessageList />} />
      <Route path="/messages/:id" element={<Message />} />
    </Routes>
  );
}

export default App;
