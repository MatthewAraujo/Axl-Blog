"use client";
import { useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="w-24 border-none p-4 bg-rose-500 text-white cursor-pointer rounded-sm disabled:cursor-not-allowed disabled:bg-rose-950 hover:bg-rose-600 "
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >Previous</button>
      <button
        className="w-24 border-none p-4 bg-rose-500 text-white cursor-pointer rounded-sm disabled:cursor-not-allowed disabled:bg-rose-950 hover:bg-rose-600"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};
