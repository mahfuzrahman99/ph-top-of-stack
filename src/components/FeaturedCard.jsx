/* eslint-disable react/prop-types */

const FeaturedCard = ({ featuredImg }) => {
  return (
    <div className="p-4 w-[330px] shadow-2xl rounded-lg">
      <div className="">
        <img
          src={featuredImg}
          className="rounded-lg h-[210px]"
          alt="Featured image"
        />
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-3">
          Stopover opportunity in İstanbul with Turkish Airlines
        </h1>
        <div className="flex justify-center">
          <button className="bg-[#ffb700] w-[170px] hover:bg-[#ffb700] p-1 rounded-md text-lg font-semibold">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
