import type { IMessage } from "~/types/message";

export function getLastMessages(collection: IMessage[]) {
  const messages: Record<string, IMessage | undefined> = {};
  for (const message of collection) {
    if ((messages[message.roomId]?.timestamp ?? 0) < message.timestamp) {
      messages[message.roomId] = message;
    }
  }
  return Object.values(messages) as IMessage[];
}
