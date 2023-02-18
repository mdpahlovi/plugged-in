import { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

import app from "../config/firebase.config";
import useGetUser from "./useGetUser";

export const AuthContext = createContext();
const auth = getAuth(app);

export const UserContext = ({ children }) => {
    const [email, setEmail] = useState(null);
    const { userLoading, user, userRefetch } = useGetUser(email);
    const [loading, setLoading] = useState(true);
    const [authRefetch, setAuthRefetch] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create User & Update Profile
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    };

    const updateUserAvatar = (avatar) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            photoURL: avatar,
        });
    };

    // Signin & Signin With Social
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const loginWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // Sign Out User & Remove JWT Token
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setEmail(currentUser?.email);
            setLoading(false);
        });
        return () => unSubscribe();
    }, [authRefetch]);

    const authInfo = {
        user,
        userLoading,
        userRefetch,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        updateUserAvatar,
        authRefetch,
        setAuthRefetch,
        login,
        loginWithGoogle,
        loginWithGithub,
        logout,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};
