import PopularCard from "../components/PopularCard";
import popular_1 from "../assets/Popular-1.png";
import popular_2 from "../assets/Popular-2.png";
import popular_3 from "../assets/Popular-3.png";
import popular_4 from "../assets/Popular-4.png";
import popular_5 from "../assets/Popular-5.png";
import popular_6 from "../assets/Popular-6.png";
import SectionTitle from "../components/SectionTitle";

const Popular = () => {
  return (
    <>
      <SectionTitle STitle={"Popular Airlines"} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <PopularCard
          image={popular_1}
          title={"Biman Bangladesh Airlines"}
          subTitle={"( 783 review )"}
          rating={"4"}
        />
        {/* 2 */}
        <PopularCard
          image={popular_3}
          title={"Emirates"}
          subTitle={"( 753 review )"}
          rating={"5"}
        />
        {/* 3 */}
        <PopularCard
          image={popular_5}
          title={"Turkish Airlines"}
          subTitle={"( 753 review )"}
          rating={"3"}
        />
        {/* 4 */}
        <PopularCard
          image={popular_1}
          title={"malaysia Airlines"}
          subTitle={"( 753 review )"}
          rating={"5"}
        />
        {/* 5 */}
        <PopularCard
          image={popular_2}
          title={"Singapore Airlines"}
          subTitle={"( 753 review )"}
          rating={"2"}
        />
        {/* 6 */}
        <PopularCard
          image={popular_4}
          title={"malaysia Airlines"}
          subTitle={"( 753 review )"}
          rating={"5"}
        />
        {/* 7 */}
        <PopularCard
          image={popular_1}
          title={"Biman Bangladesh Airlines"}
          subTitle={"( 783 review )"}
          rating={"4"}
        />
        {/* 8 */}
        <PopularCard
          image={popular_6}
          title={"american airlines"}
          subTitle={"( 753 review )"}
          rating={"1"}
        />
        {/* 9 */}
        <PopularCard
          image={popular_3}
          title={"Emirates"}
          subTitle={"( 753 review )"}
          rating={"5"}
        />
        {/* 10 */}
        <PopularCard
          image={popular_1}
          title={"Biman Bangladesh Airlines"}
          subTitle={"( 783 review )"}
          rating={"4"}
        />
        {/* 11 */}
        <PopularCard
          image={popular_4}
          title={"malaysia Airlines"}
          subTitle={"( 753 review )"}
          rating={"5"}
        />
        {/* 12 */}
        <PopularCard
          image={popular_5}
          title={"Turkish Airlines"}
          subTitle={"( 753 review )"}
          rating={"3"}
        />
      </div>
    </>
  );
};

export default Popular;
