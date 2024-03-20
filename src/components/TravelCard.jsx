/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
const TravelCard = ({ image, subTitle, title, date, PImage, PName }) => {
  return (
    <div className="rounded-lg shadow-2xl h-[350px] w-[300px] mb-14">
      <div className="rounded-lg">
        <img className="h-[180px] w-full rounded-lg" src={image} alt="" />
      </div>
      <div className="p-3">
        <div className="flex items-center gap-3 text-xs font-medium">
          <h1 className="text-[#ffb700]">{subTitle}</h1>
          <h1>{date}</h1>
        </div>
        <p className="text-sm font-bold my-2">{title}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center justify-center">
            <div>
              <img
                className="rounded-full h-[30px] w-[30px]"
                src={PImage}
                alt=""
              />
            </div>
            <p className=" text-xs font-medium pl-2">{PName}</p>
          </div>
          <p className="flex items-center gap-2 text-xs font-medium text-[#ffb700]">
            <span>Read More</span>
            <span className="flex items-center mt-1">
              <span>
                <IoIosArrowForward />
              </span>
              <span>
                <IoIosArrowForward />
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
