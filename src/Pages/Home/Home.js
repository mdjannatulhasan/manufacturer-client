import React from "react";
import CompanyVision from "./CompanyVision";
import HomeBanner from "./HomeBanner";
import PartsSection from "./PartsSection";

const Home = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <HomeBanner />
            <CompanyVision />
            <PartsSection />
        </div>
    );
};

export default Home;
