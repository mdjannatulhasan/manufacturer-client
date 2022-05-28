import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import userImagePlaceholder from "./../../image/User-Profile-PNG.png";
const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({
        email: user.email,
        phone: "",
        location: { area: "", city: "", district: "", zipCode: "" },
        education: { degreeName: "", passingYear: "", institution: "" },
        socialLinks: { fb: "", instagram: "", linkedin: "" },
    });

    const userName = user?.displayName || "";
    const userEmail = user?.email || "";
    const phone = userInfo?.phone || "";
    const locationArea = userInfo?.location.area || "";
    const locationCity = userInfo?.location?.city || "";
    const locationdistrict = userInfo?.location?.district || "";
    const locationZip = userInfo?.location?.zipCode || "";
    const degreeName = userInfo?.education?.degreeName || "";
    const passingYear = userInfo?.education?.passingYear || "";
    const institution = userInfo?.education?.institution || "";
    const fb = userInfo?.socialLinks?.fb || "";
    const instagram = userInfo?.socialLinks?.instagram || "";
    const linkedin = userInfo?.socialLinks?.linkedin || "";
    const handleInputChange = (e) => {};

    const handleNameChange = (e) => {
        const { displayName, ...rest } = userInfo;
        const newUserInfo = { displayName: e.target.value, ...rest };
        setUserInfo(newUserInfo);
    };
    const handlePhoneChange = (e) => {
        const { phone, ...rest } = userInfo;
        const newUserInfo = { phone: e.target.value, ...rest };
        setUserInfo(newUserInfo);
    };
    const handleAreaChange = (e) => {
        const { area, ...rest } = userInfo.location;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { location: { area: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleCityChange = (e) => {
        const { city, ...rest } = userInfo.location;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { location: { city: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleDistrictChange = (e) => {
        const { district, ...rest } = userInfo.location;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { location: { district: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleZipChange = (e) => {
        const { zipCode, ...rest } = userInfo.location;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { location: { zipCode: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleDegreeNameChange = (e) => {
        const { degreeName, ...rest } = userInfo.education;
        const { education, ...rest1 } = userInfo;
        const newUserInfo = { education: { degreeName: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handlePassYearChange = (e) => {
        const { passingYear, ...rest } = userInfo.education;
        const { education, ...rest1 } = userInfo;
        const newUserInfo = { education: { passingYear: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleInstitutionChange = (e) => {
        const { institution, ...rest } = userInfo.education;
        const { education, ...rest1 } = userInfo;
        const newUserInfo = { education: { institution: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handlefbChange = (e) => {
        const { fb, ...rest } = userInfo.socialLinks;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { socialLinks: { fb: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleInstaChange = (e) => {
        const { instagram, ...rest } = userInfo.socialLinks;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { socialLinks: { instagram: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handleLinkedInChange = (e) => {
        const { linkedin, ...rest } = userInfo.socialLinks;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { socialLinks: { linkedin: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    const handlerofilePicChange = (e) => {
        const { fb, ...rest } = userInfo.socialLinks;
        const { location, ...rest1 } = userInfo;
        const newUserInfo = { socialLinks: { fb: e.target.value, ...rest }, ...rest1 };
        setUserInfo(newUserInfo);
    };
    return (
        <div className="pb-16">
            <div className="cover-photo overflow-hidden">
                <figure>
                    <img
                        className="rounded-xl w-full object-cover max-h-40"
                        src="https://www.americommerce.com/2015/blog/images/9%20Steps%20to%20the%20Perfect%20E-commerce%20Product%20PageNew%20Folder/9_steps_Hero.jpg"
                        alt=""
                    />
                </figure>
            </div>
            <div className="flex">
                <div className="profilepic rounded-full overflow-hidden w-[80px] lg:w-[100px] lg:h-[100px] h-[80px] m-1 border-2 border-white relative -top-6 left-9 bg-slate-200 z-10 shadow-md">
                    <figure>
                        <img className="bg-white object-cover h-[100px]" src={user?.photoURL || userImagePlaceholder} alt="" />
                    </figure>
                </div>
                <div className="username ml-14 pt-2">
                    <h2 className="font-bold text-xl ">{user?.displayName || "Your name"}</h2>
                    <h4 className="">{user?.email}</h4>
                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="shadow-custom px-9 py-8 rounded-md">
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-2xl">Personal Information</h3>
                            <label className="border-0 px-1 m-0 leading-none text-primary font-semibold cursor-pointer modal-button" htmlFor="my-info">
                                Edit <i className="fas fa-long-arrow-alt-right"></i>
                            </label>
                        </div>
                        <form action="" className="mt-5 space-y-2">
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="userName" className="col-span-3 font-medium inline-block">
                                    Name:
                                </label>
                                <input id="userName" className="bg-transparent col-span-9 w-full" value={userName} type="text" placeholder="Your Name" disabled />
                            </div>
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="userEmail" className="col-span-3 font-medium inline-block">
                                    Email:
                                </label>
                                <input id="userEmail" className="bg-transparent col-span-9 w-full" value={userEmail} type="email" placeholder="Your Email" disabled />
                            </div>
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="userName" className="col-span-3 font-medium inline-block">
                                    Phone:
                                </label>
                                <input id="userName" className="bg-transparent col-span-9 w-full" value={phone} type="text" placeholder="Your Name" disabled />
                            </div>
                        </form>
                    </div>
                    <div className="shadow-custom px-9 py-8 rounded-md">
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-2xl">Your Address</h3>
                            <label className="border-0 px-1 m-0 leading-none text-primary font-semibold cursor-pointer modal-button" htmlFor="my-location">
                                Edit <i className="fas fa-long-arrow-alt-right"></i>
                            </label>
                        </div>
                        <form action="" className="mt-5 space-y-2">
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="userName" className="col-span-5 font-medium inline-block">
                                    Area/Road/Village:
                                </label>
                                <input id="userName" className="bg-transparent col-span-7 w-full" value={locationArea} type="text" placeholder="Your Name" disabled />
                            </div>
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="locationCity" className="col-span-5 font-medium inline-block">
                                    City/Town:
                                </label>
                                <input id="locationCity" className="bg-transparent col-span-7 w-full" value={locationCity} type="text" placeholder="Your Name" disabled />
                            </div>
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="District" className="col-span-5 font-medium inline-block">
                                    District:
                                </label>
                                <input id="District" className="bg-transparent col-span-7 w-full" value={locationdistrict} type="text" placeholder="District" disabled />
                            </div>
                            <div className="grid grid-cols-12 items-center">
                                <label htmlFor="Zipcode" className="col-span-5 font-medium inline-block">
                                    Zipcode:
                                </label>
                                <input id="Zipcode" className="bg-transparent col-span-7 w-full" value={locationZip} type="text" placeholder="Zipcode" disabled />
                            </div>
                        </form>
                    </div>
                    <div className="shadow-custom px-9 py-8 rounded-md">
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-2xl">Educational Information</h3>
                            <label className="border-0 px-1 m-0 leading-none text-primary font-semibold cursor-pointer modal-button" htmlFor="my-edu">
                                Edit <i className="fas fa-long-arrow-alt-right"></i>
                            </label>
                        </div>
                        <form action="" className="mt-5 space-y-2">
                            <div className="flex items-center">
                                <label htmlFor="userName" className="min-w-[150px] font-medium inline-block">
                                    Degree Name:
                                </label>
                                <input id="userName" className="bg-transparent col-span-9 w-full" value={degreeName} type="text" placeholder="Latest Degree Name" disabled />
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="userName" className="min-w-[150px] font-medium inline-block">
                                    Passing year:
                                </label>
                                <input id="passingYear" className="bg-transparent col-span-9 w-full" value={passingYear} type="email" placeholder="Passing year" disabled />
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="institution" className="min-w-[150px] font-medium inline-block">
                                    Institution:
                                </label>
                                <input id="institution" className="bg-transparent col-span-9 w-full" value={institution} type="text" placeholder="Institution Name" disabled />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-info" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded-md">
                    <label htmlFor="my-info" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="font-semibold text-2xl">Edit Personal Information</h3>
                    <form action="" className="mt-5 space-y-2">
                        <div className="grid grid-cols-12 items-center">
                            <label htmlFor="userName" className="col-span-3 font-medium inline-block">
                                Name:
                            </label>
                            <input id="userName" className="bg-transparent col-span-9 w-full" value={userName} type="text" placeholder="Your Name" disabled />
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <label htmlFor="userEmail" className="col-span-3 font-medium inline-block">
                                Email:
                            </label>
                            <input id="userEmail" className="bg-transparent col-span-9 w-full" value={userEmail} type="email" placeholder="Your Email" disabled />
                        </div>
                        <div className="grid grid-cols-12 items-center pb-3">
                            <label htmlFor="userName" className="col-span-3 font-medium inline-block">
                                Phone:
                            </label>
                            <input
                                id="userName"
                                className="border py-1 px-3 bg-transparent col-span-9 w-full"
                                value={phone}
                                type="text"
                                placeholder="Your Contact Number"
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <input type="submit" value="Save" className="bg-primary py-1 px-6 rounded-sm inline-block text-white" />
                    </form>
                </div>
            </div>

            <input type="checkbox" id="my-location" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded-md">
                    <label htmlFor="my-location" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="font-semibold text-2xl">Edit Address</h3>
                    <form action="" className="mt-5 space-y-2">
                        <div className="grid grid-cols-12 items-center">
                            <label htmlFor="locationArea" className="col-span-5 font-medium inline-block">
                                Area/Road/Village:
                            </label>
                            <input
                                id="locationArea"
                                className="border px-3 py-1 bg-transparent col-span-7 w-full"
                                value={locationArea}
                                onChange={handleAreaChange}
                                type="text"
                                placeholder="Area/Road/Village"
                            />
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <label htmlFor="city" className="col-span-5 font-medium inline-block">
                                City/Town:
                            </label>
                            <input id="city" className="border px-3 py-1 bg-transparent col-span-7 w-full" value={locationCity} onChange={handleCityChange} type="text" placeholder="Your City/Town" />
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <label htmlFor="userName" className="col-span-5 font-medium inline-block">
                                District:
                            </label>
                            <input
                                id="userName"
                                onChange={handleDistrictChange}
                                className="border px-3 py-1 bg-transparent col-span-7 w-full"
                                value={locationdistrict}
                                type="text"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <label htmlFor="userName" className="col-span-5 font-medium inline-block">
                                Zipcode:
                            </label>
                            <input id="userName" onChange={handleZipChange} className="border px-3 py-1 bg-transparent col-span-7 w-full" value={locationZip} type="text" placeholder="Your Name" />
                        </div>
                        <input type="submit" value="Save" className="bg-primary py-1 px-6 rounded-sm inline-block text-white" />
                    </form>
                </div>
            </div>

            <input type="checkbox" id="my-edu" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative rounded-md">
                    <label htmlFor="my-edu" className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="font-semibold text-2xl">Edit Educational Information</h3>
                    <form action="" className="mt-5 space-y-2">
                        <div className="flex items-center">
                            <label htmlFor="userName" className="min-w-[150px] font-medium inline-block">
                                Degree Name:
                            </label>
                            <input
                                id="userName"
                                className="border px-3 py-1 bg-transparent col-span-9 w-full"
                                value={degreeName}
                                name="degreeName"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Your latest degree name"
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="pass-year" className="min-w-[150px] col-span-3 font-medium inline-block">
                                Passing Year:
                            </label>
                            <input
                                id="pass-year"
                                className="border px-3 py-1 bg-transparent col-span-9 w-full"
                                value={passingYear}
                                onChange={handleInputChange}
                                type="number"
                                placeholder="Passing Year"
                                name="passingYear"
                            />
                        </div>
                        <div className="flex items-center">
                            <label htmlFor="institution" className="min-w-[150px] font-medium inline-block">
                                Institution Name:
                            </label>
                            <input
                                id="institution"
                                className="border px-3 py-1 bg-transparent col-span-9 w-full"
                                value={institution}
                                type="text"
                                name="institution"
                                onChange={handleInputChange}
                                placeholder="Your Institution Name"
                            />
                        </div>
                        <input type="submit" value="Save" className="bg-primary py-1 px-6 rounded-sm inline-block text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
