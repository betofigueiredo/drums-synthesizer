import { ReactElement } from "react";

const Button = ({
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
    default: "bg-[#2F3340] hover:bg-gray-700",
    yellow: "bg-[#E6B64C] hover:bg-[#F3C662]",
    green: "bg-green-600 hover:bg-green-500",
  };

  return (
    <button
      type="button"
      className={`${sizes[size]} rounded border border-solid border-black ${colors[color]} text-xs text-gray-100 shadow-[inset_0_1px_1px_0_rgb(255,255,255,7%)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type Props = {
  size?: "sm" | "md";
  color?: "default" | "green" | "yellow";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactElement;
};

export default Button;
