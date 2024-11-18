export interface keyModal {
    keyModal: string;
}

// type ModalElementProps = Record<string, any> & keyModal;

export interface ModalI {
    ModalElement: (props: any) => JSX.Element,
    dataProps: Record<string, unknown> & keyModal,
    isOpen: boolean;
}
