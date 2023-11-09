import { createContext } from "react";

type Context = {
  getContactAvatar: (id: string) => string,
  getContactName: (id: string) => string,
};

const ChatContext = createContext<Context>({
  getContactAvatar: () => "",
  getContactName: () => "",
});

export default ChatContext;
