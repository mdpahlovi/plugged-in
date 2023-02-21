import { useQuery } from "@tanstack/react-query";
import Dashboard from "../../components/Layout/Dashboard";
import { useAuth } from "../../hooks/useAuth";
import RequestCard from "../../components/DashBoard/Message/RequestCard";
import MemberCardLoader from "../../components/Common/MemberCardLoader";

const ConnectRequests = () => {
  const { user } = useAuth();

  const {
    data: connectionRequests = [],
    isLoading: connectionRequestLoading,
    refetch: connectionRequestRefetch,
  } = useQuery({
    queryKey: ["connectionrequests", user],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/connectionrequests?email=${user?.email}`
      ).then((res) => res.json()),
  });
  console.log(connectionRequests);

  return (
    <Dashboard
      title={`Requests of ${user?.name}`}
      className="grid xs:grid-cols-[repeat(auto-fill,_minmax(20.5rem,_1fr))] gap-6"
    >
      {connectionRequestLoading ? (
        [...Array(6)].map((user, index) => <MemberCardLoader key={index} />)
      ) : connectionRequests?.length ? (
        connectionRequests?.map((request) => (
          <RequestCard
            key={request.email}
            request={request}
            connectionRequestRefetch={connectionRequestRefetch}
          />
        ))
      ) : (
        <h1 className="col-span-full h-[calc(100vh_-_7rem)] mx-auto mb-0 flex items-center">
          No Connection Requests
        </h1>
      )}
    </Dashboard>
  );
};

export default ConnectRequests;
