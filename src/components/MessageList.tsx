import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import Message from "~/components/Message";
import ChatContext from "~/core/context";
import type { IMessage } from "~/types/message";

type MessageListProps = {
  originUserId: string,
  roomId: string | null,
  collection: IMessage[],
};

const MessageList = ({
  originUserId,
  roomId,
  collection,
}: MessageListProps) => {
  const { canLoadMessages, loadMessages } = useContext(ChatContext);
  const [loading, setLoading] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const spinner = useRef<HTMLDivElement>(null);
  const scrolled = useRef(false);

  const lastUserMessage = collection.findLast(m => m.authorId === originUserId);
  const lastMessage = collection.length ? collection[collection.length - 1] : undefined;

  // always scroll to bottom when user sends message

  useEffect(() => {
    if (scroller.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [lastUserMessage?.id]);

  // if other people send message, scroll to bottom if only it's already scrolled.

  useEffect(() => {
    if (scroller.current && scrolled.current) {
      scroller.current.scrollTop = scroller.current.scrollHeight;
    }
  }, [lastMessage?.id]);

  // scroll to bottom when a new room is activated.

  useEffect(() => {
    if (!scroller.current) return;
    const div = scroller.current;
    div.scrollTop = div.scrollHeight;
    setLoading(false);
  }, [roomId]);

  // handle scroll events

  useEffect(() => {
    if (!roomId || !scroller.current) return;
    const div = scroller.current;

    const handleScroll = async () => {
      scrolled.current = div.scrollTop >= div.scrollHeight - div.clientHeight;
      if (loading || !canLoadMessages(roomId)) return;
      if (div.scrollTop < 1) {
        const previousScrollHeight = div.scrollHeight;
        setLoading(true);
        await loadMessages(roomId);
        const addedContentHeight = div.scrollHeight - previousScrollHeight;
        const spinnerHeight = spinner.current?.clientHeight ?? 0;
        div.scrollTop = addedContentHeight - spinnerHeight;
        setLoading(false);
      }
    };

    div.addEventListener("scroll", handleScroll);

    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }, [roomId, loading, canLoadMessages, loadMessages]);

  return (
    <div ref={scroller} className="h-100 bg-primary-subtle px-4 py-1 overflow-y-scroll cool-scrollbar">
      {loading && (
        <div ref={spinner} className="text-center">
          <FontAwesomeIcon icon={faSpinner} size="xl" className="fa-fw fa-spin-pulse" />
        </div>
      )}
      {collection.map((message, index) =>
        <Message
          key={message.id}
          {...message}
          original={message.authorId === originUserId}
          prevDifferent={message.authorId !== (collection[index - 1] || {}).authorId}
          nextDifferent={message.authorId !== (collection[index + 1] || {}).authorId}
        />
      )}
    </div>
  );
};

export default MessageList;
