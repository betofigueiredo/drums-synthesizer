import { Outlet } from "react-router-dom";
import { useAppSelector } from "hooks/redux";
import NavigationBar from "components/shared/NavigationBar";

const Layout = () => {
  const isLoadingUser = useAppSelector((state) => state.user.loading);
  const isLoadingKits = useAppSelector((state) => state.kits.loading);

  if (isLoadingUser || isLoadingKits) {
    return <div>...loading</div>;
  }

  return (
    <div className="pl-24">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
