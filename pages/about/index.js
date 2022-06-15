import Layout from "../../src/component/layout/Layout";

const About = () => {
  return <div>about</div>;
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
