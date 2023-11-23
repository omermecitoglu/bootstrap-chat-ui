import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { findEmojiKeyword, replaceWithEmoji } from "~/core/emoji";
import EmojiBox from "./EmojiBox";

type ResizableInputBoxProps = {
  value: string,
  onChange: (value: string) => void,
  onEnter: React.KeyboardEventHandler<HTMLTextAreaElement>,
};

const ResizableInputBox = ({
  value,
  onChange,
  onEnter,
}: ResizableInputBoxProps) => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const [emojiKeyword, setEmojiKeyword] = useState<string | null>(null);

  useEffect(() => {
    if (textarea.current && value.endsWith("\n")) {
      textarea.current.scrollTop = textarea.current.scrollHeight;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onEnter(e);
    }
  };

  const handleKeyUp = () => {
    if (!textarea.current) return;
    const input = textarea.current;
    if (input.selectionStart === input.selectionEnd) {
      setEmojiKeyword(findEmojiKeyword(value, input.selectionStart));
    }
  };

  const injectEmoji = (emoji: string) => {
    if (!textarea.current) return;
    const input = textarea.current;
    if (input.selectionStart === input.selectionEnd) {
      const [newValue, newCaretPosition] = replaceWithEmoji(value, input.selectionStart, emoji);
      onChange(newValue);
      input.selectionStart = newCaretPosition;
      input.selectionEnd = newCaretPosition;
    }
  };

  return (
    <div className="w-100 position-relative">
      <Form.Control
        ref={textarea}
        as="textarea"
        rows={Math.min(3, value.split("\n").length)}
        className="w-100"
        style={{ resize: "none" }}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      {textarea.current && emojiKeyword &&
        <EmojiBox
          gridSize={3}
          textarea={textarea.current}
          keyword={emojiKeyword}
          submit={injectEmoji}
        />
      }
    </div>
  );
};

export default ResizableInputBox;
