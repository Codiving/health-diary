import { Nav } from "layout";

const Layout = props => {
  const { children } = props;

  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
