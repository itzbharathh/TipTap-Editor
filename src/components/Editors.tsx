"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import MenuBar from "./MenuBar";

export default function DocumentEditor() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `
      <h1>Sample Legal Document</h1>
      <p>Start typing your document here.</p>
    `,
  });

  if (!editor) return null;

  return (
    <div className="editor-shell">
      <MenuBar editor={editor} />
      <div className="page-canvas">
        <EditorContent editor={editor} className="editor-content" />
      </div>
    </div>
  );
}
