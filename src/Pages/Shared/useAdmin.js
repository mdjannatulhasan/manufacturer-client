import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const getAdmin = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/admin/${user.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            setAdminLoading(false);
            setAdmin(data.admin);
        };
        getAdmin();
    }, [user]);
    return [admin, adminLoading];
};
export default useAdmin;
