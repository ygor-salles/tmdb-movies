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
      <div className="fixed inset-0 w-full h-full bg-black/80 flex justify-center items-center z-[1000]">
        <div className="w-[687px] h-[772px] bg-neutral-200 p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex flex-col gap-8 lg:h-[580px]">
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
