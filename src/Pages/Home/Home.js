import React from "react";
import CompanyVision from "./CompanyVision";
import HomeBanner from "./HomeBanner";
import HomeReviewSec from "./HomeReviewSec";
import PartsSection from "./PartsSection";
import WhyUs from "./WhyUs";

const Home = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <HomeBanner />
            <CompanyVision />
            <PartsSection />
            <WhyUs></WhyUs>
            <HomeReviewSec></HomeReviewSec>
        </div>
    );
};

export default Home;
