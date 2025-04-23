import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, getIdToken } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const subscribeToAuthChanges = () => {
        return onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const idToken = await getIdToken(firebaseUser, true);
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                });
                setToken(idToken);
            } else {
                setUser(null);
                setToken(null);
            }
            setLoading(false);
        });
    };

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges();
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, token, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;