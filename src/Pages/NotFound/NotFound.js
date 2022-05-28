import React from "react";
import fourOfour from "./../../image/404.png";
const NotFound = () => {
    return (
        <div>
            <div className="container text-center py-16">
                <img className="mx-auto" src={fourOfour} alt="" />
            </div>
        </div>
    );
};

export default NotFound;
