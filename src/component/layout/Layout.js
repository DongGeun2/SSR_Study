import { Header, Footer, Main } from "../../styled/layoutStyled";

import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Link href={"/"}>홈</Link>
        <Link href={"/list/list"} as={"/list"}>
          리스트
        </Link>
      </Header>
      <Main>{children}</Main>
      <Footer>푸터</Footer>
    </>
  );
};

export default Layout;
