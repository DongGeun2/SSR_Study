import Layout from "../../src/component/layout/Layout";

import { Body } from "../../src/styled/homeStyled";
import { useRouter } from "next/router";

const ListDetail = ({ data }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
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
  );
};

ListDetail.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const datas = await res.json();

  const ids = datas.map((data) => data.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ListDetail;
