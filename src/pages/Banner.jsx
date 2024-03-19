import bannerImg from "../assets/task-banner.png";
import { IoEllipseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import BannerDiv from "../components/BannerDiv";
import { IoSearch } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div
        className="h-[90vh] flex justify-center items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.1)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div>
          <h1 className="text-3xl font-semibold text-white p-6">Welcome to <span className="text-[#006ce4] font-bold">AirBook</span></h1>
        <div className="max-w-5xl mx-auto h-[165px] text-center w-full bg-white p-8 rounded-md">
          <div className=" flex justify-between items-center">
            <div className=" flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-sm p-1 bg-[#ebf0f5]">
                <span>
                  <IoEllipseOutline />
                </span>
                <p className="text-xs">One way</p>
              </div>
              <div className="flex items-center gap-2 rounded-sm bg-[#006ce4] text-white p-1">
                <span className="border border-[#fff] rounded-full p-[1px] text-[10px]">
                  <IoEllipseOutline />
                </span>
                <p className="text-xs">Round Trip</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-sm p-1 text-[#006ce4] bg-[#ebf0f5]">
                <p className="text-xs">Traveller</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-sm  text-[#006ce4] bg-[#ebf0f5] p-1">
                <p className="text-xs">Economy</p>
                <span>
                  <IoIosArrowDown />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-9 items-center gap-2">
            <div className="col-span-2">
              <BannerDiv
                title={"DAC"}
                subTitle={"Dhaka"}
                desc={"Hazrat Shahjalal Internatio"}
              />
            </div>
            <div className="col-span-2">
              <BannerDiv
                title={"Cxb"}
                subTitle={"Cox’s Bazar"}
                desc={"Cox’s Bazar international"}
              />
            </div>
            <div className="col-span-2">
              <BannerDiv
                title={"03"}
                subTitle={"octobee"}
                desc={"tuesday, 2023"}
              />
            </div>
            <div className="col-span-2">
              <BannerDiv
                title={"05"}
                subTitle={"Dhaka"}
                desc={"tuesday, 2023"}
              />
            </div>
            <div className="col-span-1 mt-4">
                <p className="bg-[#ffb700] p-3 flex justify-center items-center rounded-md text-white text-3xl">
                <IoSearch />
                </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
