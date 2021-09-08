import Link from "next/link";
import navStyles from "styles/Nav.module.css";

const Nav = props => {
  const { children } = props;

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
