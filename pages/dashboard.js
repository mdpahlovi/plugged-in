import Main from "../components/Layout/Main";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../components/Buttons";

const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <Main>
            <h2>Name {session?.user?.name}</h2>
            <h3>Name {session?.user?.email}</h3>
            <Button onClick={() => signOut({ redirect: false })}>Sign Out</Button>
        </Main>
    );
};

export default Dashboard;
