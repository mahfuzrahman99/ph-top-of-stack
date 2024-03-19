import FeaturedCard from "../components/FeaturedCard";
import Featured_1 from "../assets/Featured-1.jpeg";
import Featured_2 from "../assets/Featured-2.jpeg";
import Featured_3 from "../assets/Featured-3.jpeg";
import SectionTitle from "../components/SectionTitle";

const Featured = () => {
  return (
    <>
      <SectionTitle STitle={"Featured Destinations"} />
      <div className="flex justify-center gap-6">
        <FeaturedCard featuredImg={Featured_1} />
        <FeaturedCard featuredImg={Featured_2} />
        <FeaturedCard featuredImg={Featured_3} />
      </div>
    </>
  );
};

export default Featured;
