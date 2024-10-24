import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./SliderSwiper.module.css";
function SliderSwiper() {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
          spaceBetween={50}
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"3"}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="https://fast-react-pizza-menu.netlify.app/pizzas/focaccia.jpg"
              alt="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fast-react-pizza-menu.netlify.app/pizzas/margherita.jpg"
              alt="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fast-react-pizza-menu.netlify.app/pizzas/spinaci.jpg"
              alt="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fast-react-pizza-menu.netlify.app/pizzas/funghi.jpg"
              alt="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fast-react-pizza-menu.netlify.app/pizzas/prosciutto.jpg"
              alt="a"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://fast-react-pizza-menu.netlify.app/pizzas/salamino.jpg"
              alt="a"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SliderSwiper;
