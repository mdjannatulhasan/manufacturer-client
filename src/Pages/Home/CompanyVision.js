import React from "react";
import PrimaryButton from "../Components/PrimaryButton";
import { Autoplay, EffectFade, EffectFlip, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CompanyVision = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="grid lg:grid-cols-5 grid-cols-1 items-center lg:gap-10">
                    <div className="col-span-3 space-y-3">
                        <h2 className="mb-6 text-3xl lg:text-[40px] font-bold text-accent lg:leading-tight">
                            A Company To Change The World <br /> We're <span className="text-primary">Hasan</span> Industrial.
                        </h2>
                        <p>
                            Hasan Manufacturing Industry was created in 2014 to secure U.S. global leadership in advanced manufacturing by connecting people, ideas, and technology. Manufacturing USA
                            institutes convene business competitors, academic institutions, and other stakeholders to test applications of new technology, create new products, reduce cost and risk,
                            and enable the manufacturing.
                        </p>
                        <p className="pb-3">
                            Innovations enabled by the Hasan Manufacturing Industry institutes results in products that assist workers, make buildings safer, consume less energy, and save lives.
                            Today’s research will improve tomorrow’s reality.
                        </p>
                        <PrimaryButton>Read More About Us</PrimaryButton>
                    </div>
                    <div className="col-span-2 home-company">
                        <div className="bg-slate-100">
                            <Swiper
                                // install Swiper modules
                                className="mySwiper2"
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                speed={800}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                <SwiperSlide>
                                    <div className="py-14 px-5 bg-slate-100">
                                        <div className="container space-y-5">
                                            <h4 className="lg:text-2xl text-xl font-bold text-accent flex items-center">
                                                <span className="text-primary mr-3 text-[7px]">
                                                    <i className="fas fa-square-full"></i>
                                                </span>
                                                Our Mission
                                            </h4>
                                            <p>
                                                {" "}
                                                As a provider for complex tools, we can procure, manufacture and assemble tailor made solutions. Customers approach us because they know that we can
                                                handle and machine.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="py-14 px-5 bg-slate-100">
                                        <div className="container space-y-5">
                                            <h4 className="lg:text-2xl text-xl font-bold text-accent flex items-center">
                                                <span className="text-primary mr-3 text-[7px]">
                                                    <i className="fas fa-square-full"></i>
                                                </span>
                                                Our Vision
                                            </h4>
                                            <p>
                                                Our vision is to create a better everyday life for many people.” That’s aspirational, short and to the point. More than that, it sets the tone for the
                                                company and makes it clear that they’re in the market.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyVision;
