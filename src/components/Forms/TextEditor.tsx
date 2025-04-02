import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  content: string;
  index: number;
  field: string;
  label: string;
  setContent: (index: number, field: string, value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, index, field, label, setContent }) => {
  const [value, setValue] = useState<string>(content);
  const quillRef = useRef<ReactQuill>(null);

  const handleChange = (value: string) => {
    setValue(value);
    setContent(index, field, value);
  };


  return (
    <div>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px", fontSize: "large" }}>
        {label}
      </label>
      <ReactQuill
        ref={quillRef}
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            ["bold"],
            ["italic"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        style={{ height: "100px" }}
      />
    </div>
  );
};

export default TextEditor;