import { Skeleton } from "../../../../components/base";

export function LoadingHome() {
  return (
    <div
      className="flex gap-4 p-4 justify-center max-w-7xl flex-wrap"
      data-testid="loading-home-wrapper"
    >
      {Array.from({ length: 12 }, (_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
}
