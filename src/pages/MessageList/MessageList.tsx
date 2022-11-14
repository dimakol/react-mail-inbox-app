import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppSelector } from "../../hooks";
import Message from "../../components/Message/Message";

import "./MessageList.scss";

const MessageList = () => {
  const navigate = useNavigate();
  const messages = useAppSelector((state) => state.messages.inboxList);

  return (
    <>
      <FontAwesomeIcon
        className="back-button"
        icon="arrow-left"
        size="2x"
        onClick={() => navigate("/")}
      />
      <div className="messages-container">
        <header className="messages-title">
          <h1>Messages</h1>
        </header>
        <ul className="messages-ul">
          {messages.map((message) => (
            <li className="message-li" key={message.id}>
              <Message
                id={message.id}
                subject={message.subject}
                content={message.content}
                hasBeenRead={message.hasBeenRead}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MessageList;
