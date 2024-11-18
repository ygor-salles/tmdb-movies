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

  const { isLoading, trailerKey } = useGetTrailer({ movieId: id });

  return (
    <Modal open={openModal} toggleModal={onToggle} title={title}>
      <span>{overview ?? "Nenhuma sinopse disponível"}</span>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {trailerKey ? (
            <div className="flex-grow relative">
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
            <p>Trailer não disponível</p>
          )}
        </>
      )}
    </Modal>
  );
}
