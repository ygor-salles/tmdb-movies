import { IMAGES } from "../../../assets/images";
import { API_IMAGE_URL } from "../../../constants/apiImageUrl";
import { IMovieCardProps } from "./types";

export const MovieCard = ({
  title,
  posterUrl,
  releaseDate,
  isAdult,
}: IMovieCardProps) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-zinc-900">
      <img
        className="w-full h-72 object-cover"
        src={posterUrl ? `${API_IMAGE_URL}/${posterUrl}` : IMAGES.notFoundImage}
        alt={title}
      />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Lançamento: {releaseDate}
        </p>
        <p className="text-sm font-medium text-gray-800 dark:text-white mt-2">
          Classificação:{" "}
          <span className="text-yellow-500">
            {isAdult ? "Adulto" : "Infantil"}
          </span>
        </p>
      </div>
    </div>
  );
};
