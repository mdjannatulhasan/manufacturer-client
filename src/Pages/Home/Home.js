import React from "react";
import CompanyVision from "./CompanyVision";
import HomeBanner from "./HomeBanner";
import HomeReviewSec from "./HomeReviewSec";
import PartsSection from "./PartsSection";
import WhyUs from "./WhyUs";
import BusinessSummary from "./BusinessSummary";
const Home = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <HomeBanner />
            <CompanyVision />
            <WhyUs></WhyUs>
            <PartsSection />
            <BusinessSummary></BusinessSummary>
            <HomeReviewSec></HomeReviewSec>
        </div>
    );
};

export default Home;
