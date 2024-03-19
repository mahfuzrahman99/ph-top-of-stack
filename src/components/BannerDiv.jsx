/* eslint-disable react/prop-types */

const BannerDiv = ({ title, subTitle, desc }) => {
  return (
    <div className="border rounded-md p-1 h-[55px] mt-4 grid grid-cols-3 items-center">
      <p className="font-semibold border-r-2 text-lg col-span-1">{title}</p>
      <div className="text-center col-span-2">
        <p className="font-semibold text-lg">{subTitle}</p>
        <p className="text-[10px]">{desc}</p>
      </div>
    </div>
  );
};

export default BannerDiv;
