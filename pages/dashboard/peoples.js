import { useQuery } from "@tanstack/react-query";
import React from "react";
import PeopleCard from "../../components/DashBoard/Peoples/PeopleCard";
import Dashboard from "../../components/Layout/Dashboard";

const Peoples = () => {
  const { data: ppls = [], refetch: pplsRefetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`https://plugged-in-server.onrender.com/users?role=team`).then(
        (res) => res.json()
      ),
  });
  console.log(ppls);
  return (
    <Dashboard title="Peoples of PluggedIn">
      <h1>This is peoples Route</h1>
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,_minmax(20.5rem,_1fr))] gap-6">
        {ppls.map((people) => (
          <PeopleCard
            key={people._id}
            people={people}
            pplsRefetch={pplsRefetch}
          ></PeopleCard>
        ))}
      </div>
    </Dashboard>
  );
};

export default Peoples;
