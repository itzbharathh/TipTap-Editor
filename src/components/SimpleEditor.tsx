"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

export default function SimpleEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: `
      <h1>Sample Document</h1>
      <p>Start typing your document here...</p>
    `,
    editorProps: {
      attributes: {
        class: "prosemirror-editor",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="editor-shell">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
