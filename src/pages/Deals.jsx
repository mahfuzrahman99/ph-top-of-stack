import dealImg_1 from "../assets/Deals-1.png";
import dealImg_2 from "../assets/Deals-2.png";
import dealImg_3 from "../assets/Deals-3.png";
import DealCard from "../components/DealCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../components/deals.css";
import SectionTitle from "../components/SectionTitle";

const Deals = () => {
  return (
    <>
      <SectionTitle STitle={"Deals and Offers"} />
      <div className="flex justify-center items-center gap-6">
        <Swiper
          spaceBetween={30}
          loop={Infinity}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            // When window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <DealCard DealImg={dealImg_1} />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard DealImg={dealImg_2} />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard DealImg={dealImg_3} />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard DealImg={dealImg_2} />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard DealImg={dealImg_3} />
          </SwiperSlide>
          <SwiperSlide>
            <DealCard DealImg={dealImg_2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Deals;
