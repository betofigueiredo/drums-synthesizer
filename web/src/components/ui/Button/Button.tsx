import { ReactElement, MouseEventHandler } from "react";

const Button = ({ loading = false, onClick, children }: Props) => {
  const getStyles = () => {
    let styles =
      "flex h-11 items-center rounded border border-solid border-lime-300 bg-lime-300 pl-6 pr-6 font-bold text-background-dark";
    if (loading) {
      styles += " opacity-70";
    }
    return styles;
  };

  return (
    <button
      type="button"
      className={getStyles()}
      disabled={loading}
      onClick={onClick}
    >
      {loading && (
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="black"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="black"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  );
};

type Props = {
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement | string;
};

export default Button;
