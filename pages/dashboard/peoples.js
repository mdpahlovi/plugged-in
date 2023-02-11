import { useQuery } from "@tanstack/react-query";
import MemberCardLoader from "../../components/Common/MemberCardLoader";
import PeopleCard from "../../components/DashBoard/Peoples/PeopleCard";
import Dashboard from "../../components/Layout/Dashboard";
import { jwt_axios } from "../../utilities/api";

const Peoples = () => {
    const {
        data: peoples = [],
        refetch: peoplesRefetch,
        isLoading: peoplesLoading,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () => jwt_axios(`/users?role=team`).then((res) => res.data),
    });

    return (
        <Dashboard title="Peoples of PluggedIn">
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(20.5rem,_1fr))] gap-6">
                {peoplesLoading
                    ? [...Array(6)].map((people, index) => <MemberCardLoader key={index} />)
                    : peoples.map((people) => <PeopleCard key={people._id} people={people} peoplesRefetch={peoplesRefetch}></PeopleCard>)}
            </div>
        </Dashboard>
    );
};

export default Peoples;
