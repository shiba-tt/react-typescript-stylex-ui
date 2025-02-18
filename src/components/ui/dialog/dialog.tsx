export type DialogProps = {
  open: boolean;
};

const Dialog = ({ open, ...props }: DialogProps) => {
  return (
    <dialog open={open} {...props}>
      aaa
    </dialog>
  );
};

export { Dialog };
