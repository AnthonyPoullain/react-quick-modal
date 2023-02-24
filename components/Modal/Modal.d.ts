import { ReactNode } from 'react';
export interface ButtonProperties {
    label: string | JSX.Element | ReactNode;
    variant?: 'secondary';
    color?: string;
    onClick?: () => void;
    timer?: number;
}
export interface ModalProperties {
    open: boolean;
    onClose: () => void | void;
    content: string | JSX.Element | ReactNode;
    title?: string | JSX.Element | ReactNode;
    buttons?: [] | [ButtonProperties] | [ButtonProperties, ButtonProperties] | JSX.Element | ReactNode;
    height?: string;
    width?: string;
    closable?: boolean;
    trapFocus?: boolean;
    portalSelector?: string;
    dimBackground?: boolean;
}
declare function Modal({ title, content, buttons, open, height, width, closable, onClose, trapFocus, portalSelector, dimBackground, }: ModalProperties): JSX.Element | null;
export default Modal;
