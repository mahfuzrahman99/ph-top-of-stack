/* eslint-disable react/prop-types */
const DealCard = ({ DealImg }) => {
  return (
    <div className="flex items-center justify-center h-[150px] w-[320px] shadow-2xl rounded-lg mb-16 ">
      <div>
        <img className="rounded-lg h-[150px] w-[250px]" src={DealImg} alt="" />
      </div>
      <div className="p-2">
        <p className="text-[10px] font-medium">With bkash payment only</p>
        <p className="text-[#006ce4] text-sm font-medium">
          up to 14% discount on the base fare of domestic flights
        </p>
      </div>
    </div>
  );
};

export default DealCard;
