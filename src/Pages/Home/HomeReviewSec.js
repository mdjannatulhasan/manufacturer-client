import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import hand from "./../../image/hand.svg";
import overlay from "./../../image/circle_overlay.png";

const HomeReviewSec = () => {
    const [reviews, SetReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews`);
            SetReviews(data);
        };
        getReviews();
    }, []);
    const starPrint = (rating) => {
        let ratingArray = [];
        for (let i = 0; i < rating; i++) {
            ratingArray[i] = <i className="text-primary fas fa-star"></i>;
        }
        for (let i = 1; i <= 5 - rating; i++) {
            ratingArray[5 - i] = <i className="fas fa-star"></i>;
        }
        return ratingArray;
    };
    return (
        <>
            <section className="pt-10 pb-16 ">
                <div className="text-center">
                    <h2 className="mb-5 text-3xl lg:text-[30px] font-medium text-accent lg:leading-tight">What our customer says</h2>
                    <div className="custom-divider"></div>
                </div>
                <div className="container mt-16">
                    <div className="lg:flex lg:flex-row lg:space-x-9">
                        <div
                            className="max-w-sm mx-auto w-full p-6 text-white text-center"
                            style={{ backgroundImage: `url(${overlay}), linear-gradient(#CC0102, #CC0102)`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className="w-[50px] mx-auto">
                                <figure>
                                    <img src={hand} alt="" />
                                </figure>
                            </div>
                            <h4 className="text-3xl font-semibold py-3">2890 +</h4>
                            <p className="uppercase font-medium">
                                Satisfied <br /> Customer
                            </p>
                        </div>
                        <div className="py-5 grow max-w-4xl mt-5 lg:mt-0">
                            <Swiper
                                // install Swiper modules
                                className="reviewSwiper"
                                slidesPerView={1}
                                modules={[Pagination]}
                                spaceBetween={20}
                                navigation
                                speed={800}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                {reviews.map(({ rating, comment, _id, name }) => (
                                    <SwiperSlide key={_id}>
                                        <div>
                                            <div className="italic text-lg">{comment}</div>
                                            <div className="mt-3">
                                                <div id={_id} className="">
                                                    {starPrint(rating).map((star, index) => (
                                                        <span key={index}>{star}</span>
                                                    ))}
                                                </div>
                                                <h4 className="text-lg font-medium">{name}</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeReviewSec;
