import React, { useState } from "react";
import type { IMessage } from "~/types/message";
import Chat from ".";

type TemplateProps = {
  originUserId: string,
  initialMessages: IMessage[],
  getContactAvatar: (contactId: string) => string,
  getContactName: (contactId: string) => string,
  isContactOnline: (contactId: string) => boolean,
};

const Template = ({
  originUserId,
  initialMessages,
  getContactAvatar,
  getContactName,
  isContactOnline,
}: TemplateProps) => {
  const [messages, setMessages] = useState(initialMessages);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const handleNewMessage = (roomId: string, content: string, isDummy: boolean) => {
    const messageId = Date.now().toString();
    setMessages(m => [...m, {
      id: messageId,
      content,
      roomId: roomId,
      authorId: originUserId,
      timestamp: Date.now(),
      status: isDummy ? "dummy" : "created",
    }]);
    if (!isDummy) {
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
    }
  };

  return (
    <Chat
      originUserId={originUserId}
      allMessages={messages}
      onMessageCreate={handleNewMessage}
      activeRoom={activeRoom}
      onRoomChange={setActiveRoom}
      getContactAvatar={getContactAvatar}
      getContactName={getContactName}
      isContactOnline={isContactOnline}
    />
  );
};

export default Template;
