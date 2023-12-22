import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faBurst } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <div
      id="navigation-bar"
      className="fixed left-0 top-0 z-20 h-screen w-24 border-r border-gray-700 bg-background-main"
    >
      <ul className="relative m-0 flex h-full list-none flex-col justify-center gap-4">
        <li className="relative w-full">
          <a href="#" className="flex flex-col text-center">
            <span className="bg-lime-300 m-auto mb-2 flex h-10 w-10 items-center justify-center rounded-md text-xl text-background-main">
              <FontAwesomeIcon icon={faChartSimple} />
            </span>
            <span className="w-full">Songs</span>
          </a>
        </li>
        <li className="relative w-full">
          <a href="#" className="flex flex-col text-center">
            <span className="w-full">
              <FontAwesomeIcon icon={faBurst} />
            </span>
            <span className="w-full">Feed</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
