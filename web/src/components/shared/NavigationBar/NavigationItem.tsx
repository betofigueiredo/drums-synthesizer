import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faDrum,
  faMicrophoneLines,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

const NavigationItem = ({ to, label, icon }: Props) => {
  const location = useLocation();
  const currentLocation = location.pathname || "/";
  const isActive = to === currentLocation;
  const icons = { faChartSimple, faDrum, faMicrophoneLines, faMugHot };

  function getIconCss() {
    let css =
      "m-auto mb-2 flex h-10 w-10 items-center justify-center rounded-md text-xl";
    css += isActive
      ? " bg-lime-300 text-background-main"
      : " bg-background-dark";
    return css;
  }

  function getLabelCss() {
    return isActive
      ? "w-full text-white font-semibold text-sm"
      : "w-full text-sm";
  }

  return (
    <li className="relative mb-1.5 mt-1.5 w-full">
      <Link
        to={to}
        className="flex flex-col pb-2 pt-2 text-center text-gray-300 transition-all hover:text-white"
      >
        <span className={getIconCss()}>
          <FontAwesomeIcon icon={icons[icon]} />
        </span>
        <span className={getLabelCss()}>{label}</span>
      </Link>
    </li>
  );
};

type Props = {
  to: string;
  label: string;
  icon: "faChartSimple" | "faDrum" | "faMicrophoneLines" | "faMugHot";
};

export default NavigationItem;
