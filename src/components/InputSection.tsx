import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons/faPaperclip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { convertFileToBase64 } from "~/core/base64";
import acceptedMimeTypes from "~/core/mimetype";
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

  const onEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey || e.shiftKey) {
      setInputText(text => text + "\n");
    } else {
      submitText();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    for (const file of files) {
      const base64 = await convertFileToBase64(file);
      submit(base64);
    }
  };

  return (
    <div className="flex-shrink-0">
      <div className="d-flex align-items-end gap-3">
        <ResizableInputBox
          value={inputText}
          onChange={setInputText}
          onEnter={onEnter}
        />
        <Button variant="primary" onClick={submitText} disabled={!inputText.length}>
          <FontAwesomeIcon icon={faPaperPlane} size="lg" className="fa-fw" />
        </Button>
        <Button variant="secondary" onClick={() => fileInput.current?.click()}>
          <input
            ref={fileInput}
            type="file"
            className="d-none"
            multiple
            accept={acceptedMimeTypes()}
            onChange={handleFileChange}
          />
          <FontAwesomeIcon icon={faPaperclip} size="lg" className="fa-fw" />
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
