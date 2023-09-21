import { EffectCards, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { FC } from "react";

interface ObjectSliderProps {
  images: {
    src: string;
    id: number;
  }[];
}
const ObjectSlider: FC<ObjectSliderProps> = (props) => {
  const { images } = props;
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCards, Pagination]}
      className="mySwiper"
    >
      {images.map((image) => {
        return (
          <SwiperSlide
            style={{
              borderRadius: "15px",
            }}
          >
            <Image src={image.src} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ObjectSlider;