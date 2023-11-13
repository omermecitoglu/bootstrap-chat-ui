import { createContext } from "react";

type Context = {
  getContactAvatar: (id: string) => string,
  getContactName: (id: string) => string,
  isContactOnline: (id: string) => boolean,
};

const ChatContext = createContext<Context>({
  getContactAvatar: () => "",
  getContactName: () => "",
  isContactOnline: () => false,
});

export default ChatContext;
