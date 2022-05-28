import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import AddReviewStart from "./AddReviewStart";

const AddAReview = () => {
    const [user] = useAuthState(auth);
    const [reviews, SetReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/myreviews?email=${user?.email}`);
            SetReviews(data);
            console.log(data);
        };
        getReviews();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {
            rating: e.target.rating.value,
            comment: e.target.comment.value,
            email: user?.email,
            name: user?.displayName,
        };
        const postUserInfo = async () => {
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addreview`, review);

            if (data?.success) {
                toast.info("Review Added successfully");
            } else {
                toast.error("There's an error");
            }
            console.log(reviews);
        };
        const newReviews = [...reviews, review];
        SetReviews(newReviews);
        postUserInfo();
    };
    const starPrint = (rating) => {
        let ratingArray = [];
        for (let i = 0; i < rating; i++) {
            ratingArray[i] = <i class="text-primary fas fa-star"></i>;
        }
        for (let i = 1; i <= 5 - rating; i++) {
            ratingArray[5 - i] = <i class="fas fa-star"></i>;
        }
        console.log(ratingArray);
        return ratingArray;
    };
    return (
        <section className="bg-slate-100 pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold mb-4">My Reviews</h2>
                    <label for="my-modal-3" class="mb-4 btn modal-button text-white bg-slate-600">
                        Add a review
                    </label>
                </div>
                {reviews?.length <= 0 ? <div className="pb-5">You dont have any review Yet</div> : ""}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    {reviews?.map(({ rating, comment, _id, name }) => (
                        <div className="shadow-custom p-7">
                            <div id={_id} className="mb-3">
                                {starPrint(rating).map((star) => (
                                    <span>{star}</span>
                                ))}
                            </div>
                            <div>{comment}</div>
                        </div>
                    ))}
                </div>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">
                            ✕
                        </label>
                        <h3>Add a review</h3>
                        <form onSubmit={handleSubmit} className="max-w-2xl">
                            <input type="number" name="rating" placeholder="Add rating (0-5)" min="0" max="5" className="w-full mt-4 input border px-3 py-1 bg-slate-200 rounded-md " />
                            <textarea rows="3" placeholder="Add your review" name="comment" className=" bg-slate-200 rounded-md w-full mt-4 border px-3 py-1"></textarea>
                            <input type="submit" value="Submit" className="bg-primary text-white rounded-md px-4 py-1 mt-3" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddAReview;
