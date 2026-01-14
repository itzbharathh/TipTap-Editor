import { Node } from "@tiptap/core";

const PageBreak = Node.create({
  name: "pageBreak",
  group: "block",
  atom: true,

  parseHTML() {
    return [{ tag: "div[data-page-break]" }];
  },

  renderHTML() {
    return [
      "div",
      {
        "data-page-break": "",
        class: "page-break",
      },
    ];
  },
});

export default PageBreak;
