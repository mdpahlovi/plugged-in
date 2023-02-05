import { useQuery } from "@tanstack/react-query";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import RequestCard from "../../components/DashBoard/Message/RequestCard";

const Connects = () => {
  const { authUser } = useAuth();

  const { data: connectionRequests = [], refetch: connectionRequestRefetch } =
    useQuery({
      queryKey: ["connectionrequests", authUser],
      queryFn: () =>
        fetch(
          `http://localhost:5000/connectionrequests?email=${authUser?.email}`
        ).then((res) => res.json()),
    });
  console.log(connectionRequests);

  return (
    <Dashboard title={`Connect of ${authUser?.displayName}`}>
      These people whats to connect with you
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {connectionRequests?.map((request) => (
          <RequestCard
            key={request.email}
            request={request}
            connectionRequestRefetch={connectionRequestRefetch}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default Connects;
