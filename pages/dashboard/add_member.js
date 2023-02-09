import DashBoard from "../../components/Layout/Dashboard";
import AddTeamMember from "../../components/DashBoard/Add Member/AddMember";
import { jwt_axios } from "../../utilities/api";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import Member from "../../components/DashBoard/Add Member/Member";

const AddMember = () => {
    const { authUser } = useAuth();

    const {
        data: team,
        isLoading: teamLoading,
        refetch: teamRefetch,
    } = useQuery({
        queryKey: ["team", authUser],
        queryFn: () => jwt_axios(`/team/${authUser?.email}`).then((res) => res.data),
    });

    const handleAddMember = (member) => {
        jwt_axios.put(`/team/${authUser?.email}`, { members: [...team?.members, member] }).then((res) => {
            teamRefetch();
            console.log(res.data);
        });
    };

    return (
        <DashBoard title="Add Member">
            {team?.leader_mail === authUser?.email ? <AddTeamMember handleAddMember={handleAddMember} /> : ""}
            <div className="mt-6">
                {team?.members?.map((member, index) => (
                    <Member key={member?._id} member={member} />
                ))}
            </div>
        </DashBoard>
    );
};

export default AddMember;
