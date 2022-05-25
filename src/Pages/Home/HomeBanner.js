import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import PrimaryButton from "../Components/PrimaryButton";

const HomeBanner = () => {
    return (
        <div className="home-banner">
            <Swiper
                // install Swiper modules
                className="mySwiper1"
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
                speed={3000}
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className="py-32" style={{ background: "url('https://demo.7iquid.com/steeler/wp-content/uploads/2021/02/h1_slider2.jpg')" }}>
                        <div className="container text-white space-y-7">
                            <h2 className="font-bold text-6xl">A Brighter Tomorrow Starts Today. </h2>
                            <p className="max-w-4xl text-xl">
                                The number, the industry, and the morality of the priesthood, and the devotion of the people have been manifestly increased by the total separation of the church from
                                the state.
                            </p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-32" style={{ background: "url('https://demo.7iquid.com/steeler/wp-content/uploads/2021/02/h1_slider3.jpg')" }}>
                        <div className="container text-white space-y-7">
                            <h2 className="font-bold text-6xl">A Brighter Tomorrow Starts Today. </h2>
                            <p className="max-w-4xl text-xl">
                                The number, the industry, and the morality of the priesthood, and the devotion of the people have been manifestly increased by the total separation of the church from
                                the state.
                            </p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-32" style={{ background: "url('https://demo.7iquid.com/steeler/wp-content/uploads/2021/02/h1_slider1.jpg')" }}>
                        <div className="container text-white space-y-7">
                            <h2 className="font-bold text-6xl">A Brighter Tomorrow Starts Today. </h2>
                            <p className="max-w-4xl text-xl">
                                The number, the industry, and the morality of the priesthood, and the devotion of the people have been manifestly increased by the total separation of the church from
                                the state.
                            </p>
                            <PrimaryButton>Learn More</PrimaryButton>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeBanner;
