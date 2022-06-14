import Layout from "../../src/component/layout/Layout";

import { Body } from "../../src/styled/homeStyled";
import { useRouter } from "next/router";

const ListDetail = ({ data }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Layout>
      <Body PTB={true}>
        <div></div>
        <div>{`${data?.id}. ${data?.title}`}</div>
        <div
          style={{ whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: data?.body }}
        />

        <span
          style={{
            display: "inline-block",
            margin: "10px 0",
            color: "#555555",
            fontSize: "15px",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={goBack}
        >
          뒤로가기
        </span>
      </Body>
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query?.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ListDetail;
