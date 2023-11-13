import "./Contact.scss";
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ContactAvatar from "~/components/ContactAvatar";
import MessageTime from "~/components/MessageTime";
import ChatContext from "~/core/context";
import type { IMessage } from "~/types/message";

type ContactProps = {
  lastMessage: IMessage,
  active: boolean,
  activate: (id: string) => void,
};

const Contact = ({
  lastMessage,
  active,
  activate,
}: ContactProps) => {
  const { getContactName } = useContext(ChatContext);
  const formattedContent = (content: string) => {
    const match = content.match(/^data:(.*?);base64,/);
    if (match && match[1]) return `File (${match[1]})`;
    return content;
  };
  return (
    <Card
      className="mb-3 contact"
      body={true}
      bg={active ? "success" : undefined}
      onClick={() => activate(lastMessage.roomId)}
    >
      <MessageTime timestamp={lastMessage.timestamp} className="contact__time" />
      <div className="w-100 d-flex align-items-center gap-3">
        <div>
          <ContactAvatar
            size="4rem"
            id={lastMessage.roomId}
          />
        </div>
        <div style={{ minWidth: "0" }}>
          <Card.Title className="mb-0 text-truncate">
            {getContactName(lastMessage.roomId)}
          </Card.Title>
          <Card.Text className="text-truncate">
            {formattedContent(lastMessage.content)}
          </Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default Contact;
