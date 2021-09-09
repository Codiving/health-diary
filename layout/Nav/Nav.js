import Link from "next/link";
import styled from "styled-components";

const Navigation = styled.nav`
  padding: 0.5rem;
  background-color: #79b4b7;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  margin-right: 1rem;
  color: #fff;
`;

const Nav = props => {
  const { children } = props;

  return (
    <Navigation>
      <Ul>
        <Li>
          <Link href="/">
            <a style={{ fontSize: "1.6rem", marginRight: 50 }}>
              Exercise Diary
            </a>
          </Link>
          <Link href="/home">
            <a style={{ fontSize: "1.3rem" }}>Home</a>
          </Link>
        </Li>
      </Ul>
    </Navigation>
  );
};

export default Nav;
