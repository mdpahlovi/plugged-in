import Main from "../components/Layout/Main";
import { useSession, signOut } from "next-auth/react";

const About = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <Main title="About - PluggedIn">
            This is about
            <button
                onClick={() => {
                    signOut;
                }}
                className="btn"
            >
                Signout
            </button>
        </Main>
    );
};

export default About;
