import { PAGE_WIDTH_PX, PAGE_HEIGHT_PX, MARGIN_PX } from "@/src/lib/constants";

export default function Page({ children, pageNumber }: any) {
  return (
    <div
      className="relative bg-white shadow-lg mx-auto"
      style={{
        width: PAGE_WIDTH_PX,
        minHeight: PAGE_HEIGHT_PX,
        marginBottom: "40px",
      }}
    >
      <div style={{ padding: MARGIN_PX }}>{children}</div>

      <div className="absolute bottom-4 right-6 text-sm text-gray-500">
        {pageNumber}
      </div>
    </div>
  );
}
