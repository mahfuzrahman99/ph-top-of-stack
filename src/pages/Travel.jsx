import TravelCard from "../components/TravelCard";
import Travel_1 from "../assets/Travel-1.jpeg";
import Travel_2 from "../assets/Travel-2.jpeg";
import Travel_3 from "../assets/Travel-3.jpeg";

import TravelP_1 from "../assets/blog_p_1.jpeg";
import TravelP_2 from "../assets/blog_p_1.jpeg";
import TravelP_3 from "../assets/blog_p_1.jpeg";
import "../components/travel.css"

import { Swiper, SwiperSlide  } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "../components/SectionTitle";

const Travel = () => {
  return (
    <>
    <SectionTitle STitle={"Travel Blog"}/>
    <div className="">
      <Swiper
        spaceBetween={60}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
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
          <TravelCard
            image={Travel_1}
            subTitle={"Work and Travel"}
            date={"16 septembar 23"}
            title={
              "Embracing the Digital Nomad Lifestyle the Digital Nomad thr..."
            }
            PImage={TravelP_1}
            PName={"Ys Stafen"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TravelCard
            image={Travel_2}
            subTitle={"Historical"}
            date={"14 septembar 23"}
            title={"Historical Journeys: Stepping Back in Time Through Travel"}
            PImage={TravelP_2}
            PName={"Aria Montague"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TravelCard
            image={Travel_3}
            subTitle={"Sustainable Tourism"}
            date={"10 septembar 23"}
            title={
              "Sustainable Tourism: Preserving the Planet While Seeing It All"
            }
            PImage={TravelP_3}
            PName={"Elara Thorne"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TravelCard
            image={Travel_2}
            subTitle={"Historical"}
            date={"14 septembar 23"}
            title={"Historical Journeys: Stepping Back in Time Through Travel"}
            PImage={TravelP_2}
            PName={"Aria Montague"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TravelCard
            image={Travel_3}
            subTitle={"Sustainable Tourism"}
            date={"10 septembar 23"}
            title={
              "Sustainable Tourism: Preserving the Planet While Seeing It All"
            }
            PImage={TravelP_3}
            PName={"Elara Thorne"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default Travel;
