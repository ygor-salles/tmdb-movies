import { Movie } from "../../../../../models/movie-model";

export interface IModalDetails {
  openModal: boolean;
  onToggle: () => void;
  movie: Movie;
}
