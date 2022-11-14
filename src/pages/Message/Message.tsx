import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { messagesActions } from "../../store/messages-slice";

import IMessage from "../../interfaces/IMessage";

import "./Message.scss";

const Message = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const messages = useAppSelector((state) => state.messages.inboxList);
  const [message, setMessage] = useState<IMessage | undefined | null>(null);

  const getMessageById = (id: number) =>
    messages.find((message) => message.id === id);

  useEffect(() => {
    dispatch(messagesActions.setMessageAsRead({ id: Number(id) }));
    const message = getMessageById(Number(id));
    setMessage(message);
  }, [messages]);

  return (
    <>
      <FontAwesomeIcon
        className="back-button"
        icon="arrow-left"
        size="2x"
        onClick={() => navigate("/messages")}
      />
      <FontAwesomeIcon
        className="home-button"
        icon="home"
        size="2x"
        onClick={() => navigate("/")}
      />
      <div className="message-container">
        <header className="message-title">
          <h1>{message?.subject}</h1>
        </header>
        <div className="message-box">
          <p>{message?.content}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
