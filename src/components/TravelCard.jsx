/* eslint-disable react/prop-types */
import { IoIosArrowForward } from "react-icons/io";
const TravelCard = ({ image, subTitle, title, date, PImage, PName }) => {
  return (
    <div>
      <div>
        <img className="h-[180px]" src={image} alt="" />
      </div>
      <div>
        <div>
          <h1>{subTitle}</h1>
          <h1>{date}</h1>
        </div>
        <p>{title}</p>
        <div>
          <div>
            <div>
              <img src={PImage} alt="" />
            </div>
            <p>{PName}</p>
          </div>
            <p className="flex gap-2">
              <span>Read More</span>
              <span className="flex gap-1">
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
