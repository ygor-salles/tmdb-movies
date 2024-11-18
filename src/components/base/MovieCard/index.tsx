import { useCallback, useState } from "react";
import { IMAGES } from "../../../assets/images";
import { API_IMAGE_URL } from "../../../constants/apiImageUrl";
import { RatingCircle } from "../RatingSort";
import { IMovieCardProps } from "./types";
import { ModalDetails } from "./components/ModalDetails";
import { formatDateToPtBR } from "../../../utils/formatDateToPtBR";

export const MovieCard = ({ movie }: IMovieCardProps) => {
  const { title, poster_path, release_date, adult, vote_average } = movie;

  const [openModal, setOpenModal] = useState(false);

  const handleToggle = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

  const posterUrl = poster_path ? `${API_IMAGE_URL}/${poster_path}` : "";
  const colorText = adult ? "text-red-500" : "text-green-500";

  return (
    <>
      <div
        onClick={handleToggle}
        className="w-72 relative rounded-lg overflow-hidden shadow-lg  dark:bg-zinc-900 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <img
          className="w-full h-80 object-fill"
          src={
            posterUrl ? `${API_IMAGE_URL}/${posterUrl}` : IMAGES.notFoundImage
          }
          alt={title}
        />
        <div className="px-4 py-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="text-sm  text-gray-500 dark:text-gray-400">
            Lançamento: {formatDateToPtBR(release_date)}
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-white mt-2">
            Classificação:{" "}
            <span className={colorText}>{adult ? "Adulto" : "Livre"}</span>
          </p>
          <RatingCircle rating={vote_average} />
        </div>
      </div>

      {openModal && (
        <ModalDetails
          movie={movie}
          onToggle={handleToggle}
          openModal={openModal}
        />
      )}
    </>
  );
};
