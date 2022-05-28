import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            const putUser = async () => {
                const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/${email}`);
                console.log(data);
                const accessToken = data.token;
                setToken(accessToken);
                localStorage.setItem("accessToken", accessToken);
            };
            putUser();
        }
    }, [user]);
    return token;
};
export default useToken;
