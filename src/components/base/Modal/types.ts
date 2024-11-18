import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  toggleModal: () => void;
}
