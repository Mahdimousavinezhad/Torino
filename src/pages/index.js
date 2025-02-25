import HomePage from "@/components/templates/HomePage";
import api from "@/configs/api";

function Home({ data }) {
  return (
    <>
      <HomePage tours={data} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const data = await api.get("/tour");

  return {
    props: { data },
  };
}
