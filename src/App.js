import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddAReview from "./Pages/AddAReview/AddAReview";
import Blogs from "./Pages/Blogs/Blogs";
import RequireAuth from "./Pages/Components/RequireAuth";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import MyProfile from "./Pages/MyProfile/MyProfile";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProduct from "./Pages/Product/AddProduct";
import AllProducts from "./Pages/Purchase/AllProducts";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/purchase"
                    element={
                        <RequireAuth>
                            <AllProducts></AllProducts>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/purchase/:_id"
                    element={
                        <RequireAuth>
                            <Purchase></Purchase>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/my-orders" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/add-review"
                    element={
                        <RequireAuth>
                            <AddAReview></AddAReview>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/my-profile"
                    element={
                        <RequireAuth>
                            <MyProfile></MyProfile>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                ></Route>

                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/my-portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
                <Route
                    path="/add-product"
                    element={
                        <RequireAuth>
                            <AddProduct></AddProduct>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
