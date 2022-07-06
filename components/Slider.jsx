import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";

export default function Slider({ className, slideId, slides, orientation }) {
    return (
        <div className={`${className} w-full h-full  xl:mt-0 `}>
            <Swiper
                as={"div"}
                className={`${slideId} w-full h-full`}
                modules={[Navigation, A11y, Autoplay]}
                navigation={{
                    nextEl: `.swiper-button-next`,
                    prevEl: `.swiper-button-prev`,
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={0}
                slidesPerView={1}
            >
                {slides.map((item, idx) => (
                    <SwiperSlide
                        key={idx}
                        as={"div"}
                        className={"w-full h-full"}
                    >
                        <Image
                            src={`/images/${
                                orientation === "vertical"
                                    ? "slidervertical"
                                    : "sliderhorizontal"
                            }/${item}.jpg`}
                            alt={`slide ${idx}`}
                            layout={"fill"}
                        />
                    </SwiperSlide>
                ))}
                <div className={`swiper-button-next ${slideId}`}></div>
                <div className={`swiper-button-prev ${slideId}`}></div>
            </Swiper>
        </div>
    );
}
