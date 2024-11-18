type RatingCircleProps = {
  rating: number;
};

export const RatingCircle = ({ rating }: RatingCircleProps) => {
  const percentage = (rating / 10) * 100;
  const circleRadius = 36;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const strokeDashoffset =
    circleCircumference - (percentage / 100) * circleCircumference;

  const getColor = (rating: number) => {
    if (rating <= 4) return "text-red-500";
    if (rating <= 7) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="absolute right-[20px] bottom-4">
      <div className="relative  w-12 h-12 flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          className="absolute top-0 left-0 z-10"
        >
          <circle
            cx="40"
            cy="40"
            r={circleRadius}
            fill="none"
            className="stroke-gray-200"
            strokeWidth="8"
          />
          <circle
            cx="40"
            cy="40"
            r={circleRadius}
            fill="none"
            className={`stroke-current ${getColor(rating)}`}
            strokeWidth="8"
            strokeDasharray={circleCircumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 40 40)"
          />
        </svg>
        <span className="text-lg font-bold text-gray-800 dark:text-white">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};
