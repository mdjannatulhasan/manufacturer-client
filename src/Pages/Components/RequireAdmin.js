import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "../Shared/Loading";
import useAdmin from "../Shared/useAdmin";
import { signOut } from "firebase/auth";

function RequireAdmin({ children }) {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();
    if (loading || adminLoading) {
        return <Loading></Loading>;
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAdmin;
