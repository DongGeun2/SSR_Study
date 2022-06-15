import Layout from "../../src/component/layout/Layout";

import { Body } from "../../src/styled/homeStyled";
import Link from "next/link";

const List = ({ posts }) => {
  return (
    <Body>
      {posts && posts.length > 0 ? (
        posts.map((item, i) => (
          <div
            key={`${item?.title}_${i}`}
            style={{
              padding: "15px",
              borderBottom: "1px solid #868686",
              cursor: "pointer",
            }}
          >
            <Link href={"/list/[id]"} as={`/list/${item?.id}`}>
              <a style={{ width: "100%", display: "block" }}>
                <span style={{ margin: "5px" }}>{`${i + 1}.`}</span>
                <span>{item?.title}</span>
              </a>
            </Link>
          </div>
        ))
      ) : (
        <div />
      )}

      <Link href={"/about"}>
        <a>TEST</a>
      </Link>
    </Body>
  );
};

List.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default List;
