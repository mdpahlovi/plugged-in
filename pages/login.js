import Main from "../components/Layout/Main";
import { signIn } from "next-auth/react";
import Image from "next/image";
import googleImg from "../public/logo/google.svg";
import githubImg from "../public/logo/github.svg";
import { ButtonOutline } from "../components/Buttons";

const Login = () => {
    //google handler function
    async function handleGoogleLogin() {
        signIn("google", { callbackUrl: "https://pluggedin.vercel.app/login" });
        console.log("gh");
    }
    //github handler function
    async function handleGithubLogin() {
        signIn("github", { callbackUrl: "https://pluggedin.vercel.app/login" });
        console.log("gh");
    }

    return (
        <Main title="Login your account">
            <div className="section-gap flex gap-6">
                <ButtonOutline onClick={handleGoogleLogin}>
                    <div className="flex gap-1">
                        <Image src={googleImg} alt="logo" width={20} />
                        Login with Google
                    </div>
                </ButtonOutline>

                <ButtonOutline onClick={handleGithubLogin}>
                    <div className="flex gap-1">
                        <Image src={githubImg} alt="logo" width={22} />
                        Login with Github
                    </div>
                </ButtonOutline>
            </div>
        </Main>
    );
};

export default Login;
