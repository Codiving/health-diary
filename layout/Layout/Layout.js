import DataContextProvider from "context";
import { Nav } from "layout";

const Layout = props => {
  const { children } = props;

  return (
    <DataContextProvider>
      <Nav />
      <div>{children}</div>
    </DataContextProvider>
  );
};

export default Layout;
