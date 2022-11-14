interface IMessage {
  id: number;
  subject: string;
  content: string;
  hasBeenRead: boolean;
}

export default IMessage;
