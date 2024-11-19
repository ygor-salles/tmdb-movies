import { ISkeletonProps } from "./types";

export function Skeleton({
  height = "400px",
  width = "288px",
}: Readonly<ISkeletonProps>) {
  return (
    <span
      data-testid="skeleton"
      role="presentation"
      style={{ height, width }}
      className="block bg-[#323238] rounded-md border-none animate-loading"
    />
  );
}
