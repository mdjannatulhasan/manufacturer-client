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
import Header from "./Pages/Shared/Header";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/purchase"
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

                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                <Route path="/my-portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
