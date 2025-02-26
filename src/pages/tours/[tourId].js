import api from "@/configs/api";
import DetailePage from "@/components/templates/DetailePage";

function TourDetails({ data }) {
  return (
    <div>
      <DetailePage data={data} />
    </div>
  );
}

export default TourDetails;

export async function getStaticPaths() {
  const res = await api.get("/tour");
  const paths = res.slice(0, 10).map((tour) => ({
    params: {
      tourId: tour.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const data = await api.get(`/tour/${params.tourId}`);

  if (!data.title) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
