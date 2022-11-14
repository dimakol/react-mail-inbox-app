import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const messages = useAppSelector((state) => state.messages.inboxList);
  const totalMessages = messages.length;
  const unreadMessages = messages.filter(
    (message) => !message.hasBeenRead
  ).length;

  const viewMessages = () => {
    navigate("/messages");
  };

  return (
    <div className="home-container">
      <header className="home-title">
        <h1>Hello John</h1>
      </header>
      <p className="home-info">
        You have {unreadMessages} unread messages out of {totalMessages} total
      </p>
      <div className="view-messages-div">
        <button className="view-messages-btn" onClick={viewMessages}>
          View Messages
        </button>
      </div>
    </div>
  );
};

export default Home;
