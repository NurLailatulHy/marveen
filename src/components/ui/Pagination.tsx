interface PaginationProps {
  total: number;
  activeIndex: number;
}

export default function Pagination({
  total,
  activeIndex,
}: PaginationProps) {
  return (
    <div className="flex items-center gap-5">
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} className="flex items-center gap-5">
          <span
            className={`text-h6 transition-colors ${
              index === activeIndex
                ? "text-n500"
                : "text-n300"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {index < total - 1 && (
            <div className="h-[2px] w-[40px] bg-n300" />
          )}
        </div>
      ))}
    </div>
  );
}