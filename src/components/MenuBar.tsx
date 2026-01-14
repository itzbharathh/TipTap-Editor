import { Editor } from "@tiptap/react";

export default function MenuBar({ editor }: { editor: Editor }) {
  return (
    <div className="toolbar">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>

      <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        Left
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      >
        Center
      </button>
    </div>
  );
}
