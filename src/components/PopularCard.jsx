/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";

const PopularCard = ({ image, title, rating, subTitle }) => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img className="h-[40px] w-[40px]" src={image} alt="" />
      </div>
      <div>
        <p className="text-sm font-medium text-[#006ce4]">{title}</p>
        <p className="text-xs font-medium4] flex items-center gap-[2px]">
          <span className="text-[#ffb700]"><FaStar /></span>
          {rating} {subTitle}
        </p>
      </div>
    </div>
  );
};

export default PopularCard;
