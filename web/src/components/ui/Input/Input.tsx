import { ChangeEventHandler } from "react";

const Input = ({
  size = "md",
  type = "text",
  label,
  value,
  onChange,
}: Props) => {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
  };

  return (
    <>
      {label && (
        <div className="mb-1 w-full text-xs tracking-widest text-gray-400">
          {label}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-gray-600 bg-[#363850] p-2 text-xl font-bold text-gray-300 outline-0 transition-all focus-visible:border-gray-300"
      />
    </>
  );
};

type Props = {
  size?: "sm" | "md";
  type?: "text" | "number";
  label?: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default Input;
