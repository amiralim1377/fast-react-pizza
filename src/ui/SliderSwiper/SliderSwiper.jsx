import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/effect-coverflow";
import styles from "./SliderSwiper.module.css";
function SliderSwiper() {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          effect={"coverflow"}
          grabCursor={true}
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
