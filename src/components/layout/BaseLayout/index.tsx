import { IMAGES } from "../../../assets/images";
import { IBaseLayoutProps } from "./types";

export function BaseLayout({ children }: Readonly<IBaseLayoutProps>) {
  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <header className="flex justify-between items-center  bg-zinc-900 py-4 px-4 sm:px-8">
        <img src={IMAGES.logoTmdb} alt="tmdb-logo" className="w-24 h-12" />
        <div className="flex items-center gap-2">
          <img
            src={IMAGES.tech4}
            alt="tech4Humans-logo"
            className="w-8 h-8 sm:w-10h-10"
          />
          <span className="text-white">Buscador de filmes</span>
        </div>
      </header>
      <main className="flex flex-col gap-6 flex-1 items-center bg-gradient-to-r py-5 from-zinc-800 to-zinc-900 via-blue-900">
        {children}
      </main>
      <footer className="flex flex-col gap-2 justify-center items-center  bg-blue-950 p-4 sm:p-8">
        <span className="text-white">Desenvolvido por Ygor Salles</span>
        <span className="text-white">Tech 4 Humans</span>
      </footer>
    </div>
  );
}
