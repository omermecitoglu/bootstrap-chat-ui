export type IMessage = {
  id: string,
  content: string,
  roomId: string,
  authorId: string,
  timestamp: number,
  status: "new" | "created" | "delivered" | "read",
}
