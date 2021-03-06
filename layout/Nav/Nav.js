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

  @media (min-width: 478px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 477px) {
    & > a:nth-child(2),
    & > a:nth-child(3) {
      display: none;
    }
  }
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
          <Link href="/">
            <a style={{ fontSize: "1.3rem", marginRight: "1rem" }}>Home</a>
          </Link>
          <Link href="/statistics">
            <a style={{ fontSize: "1.3rem" }}>Statistics</a>
          </Link>
        </Li>
      </Ul>
    </Navigation>
  );
};

export default Nav;
