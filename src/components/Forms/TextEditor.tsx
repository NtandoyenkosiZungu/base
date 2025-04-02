import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  index: number;
  content: string;
  field: string;
  label: string;
  setContent: (index: number, field: string, value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, index, field, label, setContent }) => {
  const [value, setValue] = useState<string>(content);

  const handleChange = (value: string) => {
    setValue(value);
    setContent(index, field, value);
  };

  return (
    <div>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "8px", fontSize:'large' }}>
        {label}
      </label>
      <ReactQuill
        value={value}
        onChange={handleChange}
        modules={{
          toolbar: [
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        style={{ height: "100pxpx" }}
      />
    </div>
  );
};

export default TextEditor;
