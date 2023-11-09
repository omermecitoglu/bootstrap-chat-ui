import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons/faPaperclip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import ResizableInputBox from "./ResizableInputBox";

type InputSectionProps = {
  submit: (text: string) => void,
};

const InputSection = ({
  submit,
}: InputSectionProps) => {
  const [inputText, setInputText] = useState("");
  const fileInput = useRef<HTMLInputElement>(null);

  const submitText = () => {
    if (inputText) {
      submit(inputText);
      setInputText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.ctrlKey) {
        setInputText(text => text + "\n");
      } else {
        submitText();
      }
    }
  };

  return (
    <div className="flex-shrink-0">
      <div className="d-flex align-items-end gap-3">
        <ResizableInputBox
          value={inputText}
          onChange={setInputText}
          onKeyDown={handleKeyDown}
        />
        <Button variant="primary" onClick={submitText} disabled={!inputText.length}>
          <FontAwesomeIcon icon={faPaperPlane} size="lg" className="fa-fw" />
        </Button>
        <Button variant="secondary" onClick={() => fileInput.current?.click()}>
          <input ref={fileInput} type="file" className="d-none" multiple accept="image/*" />
          <FontAwesomeIcon icon={faPaperclip} size="lg" className="fa-fw" />
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
