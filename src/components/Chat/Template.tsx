import React, { useState } from "react";
import type { IMessage } from "~/types/message";
import Chat from ".";

type TemplateProps = {
  originUserId: string,
  initialMessages: IMessage[],
  getContactAvatar: (contactId: string) => string,
  getContactName: (contactId: string) => string,
};

const Template = ({
  originUserId,
  initialMessages,
  getContactAvatar,
  getContactName,
}: TemplateProps) => {
  const [messages, setMessages] = useState(initialMessages);

  const handleNewMessage = (message: string, roomId: string) => {
    const messageId = Date.now().toString();
    setMessages(m => [...m, {
      id: messageId,
      content: message,
      roomId: roomId,
      authorId: originUserId,
      timestamp: Date.now(),
      status: "created",
    }]);
    setTimeout(() => {
      setMessages(msgs => {
        return msgs.map(msg => msg.id === messageId ? ({
          ...msg,
          status: "delivered",
        }) : msg);
      });
    }, 3000);
    setTimeout(() => {
      setMessages(msgs => {
        return msgs.map(msg => msg.id === messageId ? ({
          ...msg,
          status: "read",
        }) : msg);
      });
    }, 6000);
  };

  return (
    <Chat
      originUserId={originUserId}
      allMessages={messages}
      addMessage={handleNewMessage}
      getContactAvatar={getContactAvatar}
      getContactName={getContactName}
    />
  );
};

export default Template;