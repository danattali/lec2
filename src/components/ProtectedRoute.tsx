import { Navigate } from "react-router-dom";
import { FCC } from "../@types/types";
import { showErrorDialog } from "../ui/dialogs";

const ProtectedRoute: FCC = ({ children }) => {
    const isLoggedIn = localStorage.getItem("token");

    if (!isLoggedIn) {
        showErrorDialog("Unauthorized", "You must be logged in to access this page");
        return <Navigate to={"/login"} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;