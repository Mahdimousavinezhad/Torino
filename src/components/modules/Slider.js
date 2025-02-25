// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/s1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/s2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/s3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/s4.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
