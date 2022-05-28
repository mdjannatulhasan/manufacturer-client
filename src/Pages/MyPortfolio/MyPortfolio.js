import React from "react";

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero py-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="lg:text-4xl text-3xl font-bold">Shah Muhammad Jannatul Hasan</h1>
                        <p className="py-6">shahmdjhm@gmail.com</p>

                        <h2 className="text-2xl font-bold">Educational Background</h2>
                        <p className="pt-3">
                            B.Sc. in Computer Science And Engineering <br /> BRAC University
                        </p>

                        <h2 className="text-2xl font-bold pt-5">List of technology Skills</h2>
                        <p className="pt-3">
                            1. HTML and CSS
                            <br /> 2. Bootstrap, TailwindCSS
                            <br /> 3. JavaScript
                            <br /> 4. ReactJS, NodeJS
                            <br /> 5. MongoDB, MySQL
                            <br /> 6. PHP - Laravel
                            <br /> 7. WordPress
                        </p>

                        <h2 className="text-2xl font-bold pt-5">Project Live links:</h2>
                        <p className="pt-3">
                            1.{" "}
                            <a className="text-primary" href="https://hasan-inventory.web.app/">
                                Inventory Management Website
                            </a>
                            <br /> 2.{" "}
                            <a className="text-primary" href="http://fixbil.no/">
                                Garage with booking system
                            </a>
                            <br /> 3.{" "}
                            <a className="text-primary" href="https://doctor-sakib.netlify.app/">
                                Portfolio of single service providers
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;
