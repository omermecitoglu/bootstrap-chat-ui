import React, { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";

type ResizableInputBoxProps = {
  value: string,
  onChange: (value: string) => void,
  onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>,
};

const ResizableInputBox = ({
  value,
  onChange,
  onKeyDown,
}: ResizableInputBoxProps) => {
  const textarea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textarea.current && value.endsWith("\n")) {
      textarea.current.scrollTop = textarea.current.scrollHeight;
    }
  }, [value]);

  return (
    <Form.Control
      ref={textarea}
      as="textarea"
      rows={Math.min(3, value.split("\n").length)}
      className="w-100"
      style={{ resize: "none" }}
      value={value}
      onChange={e => onChange(e.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};

export default ResizableInputBox;
