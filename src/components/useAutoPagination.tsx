import { Editor } from "@tiptap/react";
import { PAGE_HEIGHT_PX } from "@/src/lib/constants";

export function autoPaginate(editor: Editor) {
  if (!editor) return;

  requestAnimationFrame(() => {
    const editorEl = document.querySelector(".ProseMirror") as HTMLElement;
    if (!editorEl) return;

    const blocks = Array.from(editorEl.children) as HTMLElement[];

    let accumulatedHeight = 0;

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      const height = block.offsetHeight;

      accumulatedHeight += height;

      // If overflow detected
      if (
        accumulatedHeight > PAGE_HEIGHT_PX &&
        !block.hasAttribute("data-page-break")
      ) {
        editor
          .chain()
          .focus()
          .insertContentAt(
            editor.state.selection.from,
            "<div data-page-break></div>"
          )
          .run();
        break;
      }
    }
  });
}
