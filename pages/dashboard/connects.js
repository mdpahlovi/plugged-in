import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";

const Connects = () => {
    const { authUser } = useAuth();

    return <Dashboard title={`Connect of ${authUser?.displayName}`}>This is connects table</Dashboard>;
};

export default Connects;
