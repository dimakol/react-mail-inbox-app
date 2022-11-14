import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch } from "../../hooks";
import { messagesActions } from "../../store/messages-slice";

import "./Message.scss";

const Message: React.FC<{
  id: number;
  subject: string;
  content: string;
  hasBeenRead: boolean;
}> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const viewMessage = () => {
    navigate(`/messages/${props.id}`);
  };

  const markAsRead = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    dispatch(messagesActions.setMessageAsRead({ id: Number(props.id) }));
  };

  const markAsUnread = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    dispatch(messagesActions.setMessageAsUnread({ id: Number(props.id) }));
  };

  const handleDelete = (event: React.MouseEvent<SVGSVGElement>) => {
    event.stopPropagation();
    dispatch(messagesActions.deleteMessage({ id: Number(props.id) }));
  };

  return (
    <Card
      className="message"
      border="secondary"
      style={{ width: "25rem" }}
      onClick={viewMessage}
    >
      <Card.Body className={props.hasBeenRead ? "message-has-been-read" : ""}>
        <Card.Title>{props.subject}</Card.Title>
        <Card.Text className="message-content-preview">
          {props.content}
        </Card.Text>
        <Card.Footer>
          <FontAwesomeIcon
            className="icon"
            icon="trash"
            title="Delete"
            onClick={handleDelete}
          />
          {props.hasBeenRead && (
            <FontAwesomeIcon
              className="icon"
              icon="envelope"
              title="Mark as unread"
              onClick={markAsUnread}
            />
          )}
          {!props.hasBeenRead && (
            <FontAwesomeIcon
              className="icon"
              icon="envelope-open"
              title="Mark as read"
              onClick={markAsRead}
            />
          )}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Message;
