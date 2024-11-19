import { URL_YOUTUBE } from "../../../../../constants/urlYoutube";
import { Modal } from "../../../Modal";
import { Skeleton } from "../../../Skeleton";
import { useGetTrailer } from "./hooks/useGetTrailer";
import { IModalDetails } from "./types";

export function ModalDetails({
  movie,
  onToggle,
  openModal,
}: Readonly<IModalDetails>) {
  const { title, overview, id } = movie;

  const { trailerKey, isLoading } = useGetTrailer({ movieId: id });

  return (
    <Modal open={openModal} toggleModal={onToggle} title={title}>
      <span data-testid="modal-detail-sinopse">
        {!overview || overview.length === 0
          ? "Nenhuma sinopse disponível"
          : overview}
      </span>
      {isLoading ? (
        <Skeleton width="100%" />
      ) : (
        <>
          {trailerKey ? (
            <div
              className="flex-grow relative"
              data-testid="modal-detail-iframe"
            >
              <iframe
                src={`${URL_YOUTUBE}/${trailerKey}`}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              ></iframe>
            </div>
          ) : (
            <div
              className="w-full h-full bg-gray-300 rounded flex justify-center items-center"
              data-testid="modal-detail-empty"
            >
              <p className="text-gray-600">Trailer não disponível</p>
            </div>
          )}
        </>
      )}
    </Modal>
  );
}
