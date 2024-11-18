import { ISkeletonProps } from "./types";

export function Skeleton({
  height = "400px",
  width = "288px",
}: Readonly<ISkeletonProps>) {
  return (
    <span
      className={`block h-[${height}] w-[${width}] bg-[#323238] rounded-md border-none animate-loading`}
    />
  );
}
