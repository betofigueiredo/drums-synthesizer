import { useAppSelector } from "hooks/redux";
import NavigationBar from "components/shared/NavigationBar";

const Layout = ({ children }: { children: (string | JSX.Element)[] }) => {
  const isLoadingUser = useAppSelector((state) => state.user.loading);
  const isLoadingKits = useAppSelector((state) => state.kits.loading);

  if (isLoadingUser || isLoadingKits) {
    return <div>...loading</div>;
  }

  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
