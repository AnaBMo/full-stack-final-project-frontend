import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { AuthContext } from "../../context/AuthContext";

function Logout() {
    const { setUser, setToken } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const logoutAndRedirect = async () => {
            try {
                await signOut(auth);
                setUser(null);
                setToken(null);
                navigate("/login");
            } catch (error) {
                console.error("Error logging out:", error);
            }
        };

        logoutAndRedirect();
    }, []);

    return null;
}

export default Logout;