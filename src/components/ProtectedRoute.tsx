import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { FCC } from "../@types/types";
import dialogs from "../ui/dialogs";

const ProtectedRoute: FCC = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
        dialogs.error("BB", "BB").then()
        return (
            <div>
                Hey Joe,
                <div className="bg-orange-300">{children}</div>
            </div>
        );
    }
    return <>{children}</>
};

export default ProtectedRoute;