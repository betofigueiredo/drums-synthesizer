import { ReactElement, MouseEventHandler } from "react";

const SquareButton = ({
  size = "md",
  color = "default",
  onClick,
  children,
}: Props) => {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
  };
  const colors = {
    default: "bg-[#373952] text-gray-400 hover:bg-gray-700",
    yellow: "bg-[#E6B64C] text-background-dark hover:bg-[#F3C662]",
    green: "bg-lime-300 text-background-dark hover:bg-lime-300",
  };

  return (
    <button
      type="button"
      className={`${sizes[size]} rounded border border-solid border-slate-900 ${colors[color]} shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type Props = {
  size?: "sm" | "md";
  color?: "default" | "green" | "yellow";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement;
};

export default SquareButton;
