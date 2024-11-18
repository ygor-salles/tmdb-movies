import { IoMdClose } from "react-icons/io";
import { IModalProps } from "./types";

export function Modal({
  toggleModal,
  open,
  title,
  children,
}: Readonly<IModalProps>) {
  if (open) {
    return (
      <div className="fixed inset-0 w-full h-full bg-black/80 flex justify-center items-center z-20 px-0 sm:px-4">
        <div className="bg-neutral-200  shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex flex-col gap-4 p-4 w-full h-full rounded-none sm:p-8 sm:w-[687px] sm:h-[580px] sm:rounded-2xl ">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">{title}</h2>
            <button onClick={toggleModal}>
              <IoMdClose size={32} />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }

  return null;
}
