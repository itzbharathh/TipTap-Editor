import { PAGE_WIDTH, PAGE_HEIGHT, MARGIN } from "@/src/lib/constants";

export default function Page({ children, pageNumber }: any) {
  return (
    <div
      className="relative bg-white shadow-lg mx-auto"
      style={{
        width: PAGE_WIDTH,
        minHeight: PAGE_HEIGHT,
        marginBottom: "40px",
      }}
    >
      <div style={{ padding: MARGIN }}>{children}</div>

      <div className="absolute bottom-4 right-6 text-sm text-gray-500">
        {pageNumber}
      </div>
    </div>
  );
}
