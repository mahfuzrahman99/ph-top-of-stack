import Banner from "./Banner";
import Deals from "./Deals";
import Featured from "./Featured";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Subscribe from "./Subscribe";
import Travel from "./Travel";

const Home = () => {
  return (
    <div>
      <div>
        <div className="absolute top-0 w-full bg-[#fff] bg-opacity-90 ">
          <Navbar />
        </div>
        <Banner/>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <Featured/>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <Deals/>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <Popular/>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <Travel/>
      </div>
      <div className="max-w-5xl mx-auto my-10">
        <Subscribe/>
      </div>
    </div>
  );
};

export default Home;
