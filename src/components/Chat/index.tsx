import "~/styles/scrollbar.scss";
import React, { useMemo, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactList from "~/components/ContactList";
import InputSection from "~/components/InputSection";
import MessageList from "~/components/MessageList";
import ChatContext from "~/core/context";
import { getLastMessages } from "~/core/message";
import type { IMessage } from "~/types/message";

type ChatProps = {
  originUserId: string,
  allMessages: IMessage[],
  addMessage: (message: string, roomId: string) => void,
  getContactAvatar: (contactId: string) => string,
  getContactName: (contactId: string) => string,
  isContactOnline: (contactId: string) => boolean,
};

const Chat = ({
  originUserId,
  allMessages,
  addMessage,
  getContactAvatar,
  getContactName,
  isContactOnline,
}: ChatProps) => {
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const lastMessages = useMemo(() => getLastMessages(allMessages), [allMessages]);

  const loadedMessages = useMemo(() => allMessages.filter(m => m.roomId === activeRoom), [allMessages, activeRoom]);

  return (
    <ChatContext.Provider value={{ getContactAvatar, getContactName, isContactOnline }}>
      <Row className="h-100 gx-2">
        <Col md={5} lg={4} xxl={3} className="h-100 d-none d-md-block">
          <ContactList
            lastMessages={lastMessages}
            activeRoom={activeRoom}
            activateRoom={setActiveRoom}
          />
        </Col>
        <Col className="h-100">
          <div className="h-100 d-flex flex-column gap-3">
            <MessageList
              originUserId={originUserId}
              collection={loadedMessages}
            />
            {activeRoom && <InputSection submit={message => addMessage(message, activeRoom)} />}
          </div>
        </Col>
      </Row>
    </ChatContext.Provider>
  );
};

export default Chat;
