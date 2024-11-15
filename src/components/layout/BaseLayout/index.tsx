import { IMAGES } from "../../../assets/images";
import { IBaseLayoutProps } from "./types";

export function BaseLayout({ children }: Readonly<IBaseLayoutProps>) {
  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <header className="flex justify-between items-center  bg-blue-950 p-4">
        <img src={IMAGES.logoTmdb} alt="logo" className="w-24 h-12" />
        <span className="text-white">Titulo</span>
      </header>
      <main className="flex flex-col gap-6 flex-1 items-center bg-gradient-to-r py-5 from-zinc-800 to-zinc-900 via-blue-900">
        {children}
      </main>
      <footer className="flex justify-center items-center  bg-blue-950 p-12">
        <span className="text-white">Footer</span>
      </footer>
    </div>
  );
}
