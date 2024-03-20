import subscribeImg from "../assets/Subscribe-1.png";

const Subscribe = () => {
  return (
    <div className="md:grid grid-cols-2 items-center gap-6 ">
      <div className="col-span-1">
        <img className="h-[350px]" src={subscribeImg} alt="" />
      </div>
      <div className="p-6">
        <p className="text-4xl font-bold text-start">
          Subscribe to our Newsletter!
        </p>
        <p className="text-sm font-semibold text-start text-[#006ce4] my-3">
          Subscribe to our newsletter and stay updated.
        </p>
        <input
          type="text"
          className="p-2 outline-none w-[350px] rounded-md border border-[#006ce4]"
          name=""
          id=""
        />
        <div className="">
          <button className="bg-[#ffb700] w-[350px] p-2 my-3 rounded-md text-sm font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
