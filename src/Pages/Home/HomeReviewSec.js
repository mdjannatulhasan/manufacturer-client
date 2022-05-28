import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeReviewSec = () => {
    const [reviews, SetReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews`);
            SetReviews(data);
            console.log(data);
        };
        getReviews();
    }, []);
    return <section>{reviews.length}</section>;
};

export default HomeReviewSec;
