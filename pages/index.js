import Layout from "../src/component/layout/Layout";

import { Body } from "../src/styled/homeStyled";

export default function Home() {
  return <Body PTB={true}>홈입니다.</Body>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
