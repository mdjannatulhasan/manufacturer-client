import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    const [tokenLoading, setTokenLoading] = useState(false);

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            setTokenLoading(true);
            const putUser = async () => {
                const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/${email}`);
                console.log(data);
                const accessToken = data.token;
                localStorage.setItem("accessToken", accessToken);
                setToken(accessToken);
                setTokenLoading(false);
            };
            putUser();
        }
    }, [user]);
    return [token, tokenLoading];
};
export default useToken;
