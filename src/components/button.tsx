export const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  const classes = `px-5 py-3 border-[1px] border-black rounded-md text-xs font-light ${className}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
