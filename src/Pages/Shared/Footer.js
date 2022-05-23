import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="">
            <div className="bg-accent pt-16 pb-14">
                <div className=" container">
                    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between lg:gap-8 text-white text-center lg:text-left">
                        <div className="space-y-5 max-w-[300px] mx-auto lg:mx-0">
                            <Link to="/" className="text-white flex font-bold text-xl flex-col lg:flex-row space-x-3 items-center justify-center lg:justify-start">
                                <figure>
                                    <img className="mx-auto mb-2 lg:mb-0" src="/icon.png" width="60" alt="" />
                                </figure>
                                <span className="inline-block">
                                    Hasan Manufacturing <br />
                                    Industry
                                </span>
                            </Link>
                            <p>A leading developer of A-grade commercial, industrial and residential projects in USA. Since its foundation the company.</p>
                            <div className="social-icon">
                                <Link className="hover:text-primary hover:bg-white hover:border-white text-[#605F61] border-[1px] inline-block border-[#605F61] py-3 px-4" to="/">
                                    fb
                                </Link>
                                <Link className="hover:text-primary hover:bg-white hover:border-white text-[#605F61] border-[1px] border-l-0 inline-block border-[#605F61] py-3 px-4" to="/">
                                    fb
                                </Link>
                                <Link className="hover:text-primary hover:bg-white hover:border-white text-[#605F61] border-[1px] border-l-0 inline-block border-[#605F61] py-3 px-4" to="/">
                                    fb
                                </Link>
                                <Link className="hover:text-primary hover:bg-white hover:border-white text-[#605F61] border-[1px] border-l-0 inline-block border-[#605F61] py-3 px-4" to="/">
                                    fb
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-2xl mb-7">Contact Company</h4>
                            <div className="space-y-3 grid grid-cols-1">
                                <div>
                                    <a className="hover:text-primary transition-colors" href="tel:O13482362323">
                                        <span className="text-[#605F61] mr-3">
                                            <i className="fas fa-phone-alt"></i>
                                        </span>
                                        O13482362323
                                    </a>
                                </div>
                                <div>
                                    <a className="hover:text-primary transition-colors transition" href="mailto:shahmdjhm@gmail.com">
                                        <span className="text-[#605F61] mr-3">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        shahmdjhm@gmail.com
                                    </a>
                                </div>
                                <div to="/">
                                    <span className="text-[#605F61] mr-3">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    Mohakhali, Dhaka, Bangladesh
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-2xl mb-7">Quick Links</h4>
                            <div className="space-y-3 grid grid-cols-1">
                                <div className="mx-auto">
                                    <Link className="flex items-center hover:text-primary transition-colors" to="/">
                                        <span className="text-primary mr-3 text-[7px]">
                                            <i className="fas fa-square-full"></i>
                                        </span>
                                        Some place
                                    </Link>
                                </div>
                                <div className="mx-auto">
                                    <Link className="flex items-center hover:text-primary transition-colors" to="/">
                                        <span className="text-primary mr-3 text-[7px]">
                                            <i className="fas fa-square-full"></i>
                                        </span>
                                        Some place
                                    </Link>
                                </div>
                                <div className="mx-auto">
                                    <Link className="flex items-center hover:text-primary transition-colors" to="/">
                                        <span className="text-primary mr-3 text-[7px]">
                                            <i className="fas fa-square-full"></i>
                                        </span>
                                        Some place
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-5 text-[#605F61]">
                <div className="container">
                    <div className="text-center">
                        <div className="">
                            © 2022 all right reserved to
                            <a className="text-primary ml-1" href="https://smjhm.com">
                                Hasan
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
