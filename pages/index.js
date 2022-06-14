import Layout from "../src/component/layout/Layout";

import { Body } from "../src/styled/homeStyled";

export default function Home() {
  return (
    <Layout>
      <Body PTB={true}>홈입니다.</Body>
    </Layout>
  );
}
