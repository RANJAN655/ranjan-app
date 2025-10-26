// RTE.jsx
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";
import { Table, TableRow, TableCell, TableHeader } from "@tiptap/extension-table";
import "prosemirror-view/style/prosemirror.css";

export default function RTE({ name = "content", control, label, defaultValue = "" }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ link: false }),
      Image,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: defaultValue,
    autofocus: true,
  });

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      {editor && (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange } }) => {
            useEffect(() => {
              if (!editor) return;

              const handleUpdate = () => onChange(editor.getHTML());

              editor.on("update", handleUpdate);
              return () => editor.off("update", handleUpdate);
            }, [editor, onChange]);

            return <EditorContent editor={editor} className="border rounded p-2 min-h-[300px]" />;
          }}
        />
      )}
    </div>
  );
}
