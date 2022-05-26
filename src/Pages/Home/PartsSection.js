import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import GetProducts from "../Shared/GetProducts";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";

const PartsSection = () => {
    const [products, setProducts, loading, setLoading] = GetProducts();
    let reversedProducts = products.reverse();
    return (
        <section className="pb-16 pt-10">
            <div className="container">
                <div className="text-center">
                    <h2 className="mb-5 text-3xl lg:text-[40px] font-bold text-accent lg:leading-tight">Tools We Manufacture</h2>
                    <p className="text-lg max-w-2xl mx-auto pb-6">Hasan Manufacturing Industry's high end manufacturing services are a perfect complement to today’s high tech industries.</p>
                    <div className="custom-divider"></div>

                    <div className="product-slider mt-14">
                        {loading ? (
                            <Loading></Loading>
                        ) : (
                            <Swiper
                                // install Swiper modules
                                className="mySwiper3"
                                slidesPerView={3}
                                modules={[Pagination]}
                                spaceBetween={20}
                                navigation
                                speed={800}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                            >
                                {reversedProducts.map((product) => (
                                    <SwiperSlide key={product._id}>
                                        <div className="py-14 px-5 bg-white shadow-sm">
                                            <div className="container">
                                                <figure className="mb-5">
                                                    <img className="mx-auto" src={product.image} style={{ maxHeight: "200px" }} alt="" />
                                                </figure>
                                                <h4 className="text-xl font-bold text-accent mb-4">{product.name}</h4>
                                                <p className="pb-1">
                                                    Minimum order quantity: <span className="text-lg font-bold">{product.orderQuantity}pcs</span>
                                                </p>
                                                <p className="pb-1">
                                                    Available Stock: <span className="text-lg font-bold">{product.stock}pcs</span>
                                                </p>
                                                <p className="pb-1">
                                                    Per unit price: <span className="text-lg font-bold">{product.price}$</span>
                                                </p>
                                                <p className="pb-5">{product.description.substring(0, 100)}</p>
                                                <Link className="bg-primary text-white block py-1" to={`/purchase/${product._id}`}>
                                                    Order Now
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartsSection;
