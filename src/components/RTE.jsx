import React, { useRef, useMemo } from "react";
import { Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
}) {
  const quillRef = useRef(null);

  // Custom image upload (base64)
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files && input.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection(true);
        if (range) {
          editor.insertEmbed(range.index, "image", base64);
          editor.setSelection(range.index + 1);
        }
      };
      reader.readAsDataURL(file);
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
    "image",
  ];

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={value || ""}
            onChange={onChange}
            modules={modules}
            formats={formats}
             style={{
    backgroundColor: "white",
    color: "black",            // ✅ text color
    minHeight: "200px",
    borderRadius: "8px",
  }}
          />
        )}
      />
    </div>
  );
}
