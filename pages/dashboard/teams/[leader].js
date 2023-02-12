import Teams from "../../../components/Layout/Teams";
import AddTeamMember from "../../../components/DashBoard/Add Member/AddMember";
import { jwt_axios } from "../../../utilities/api";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../hooks/useAuth";
import Member from "../../../components/DashBoard/Add Member/Member";
import useGetUser from "../../../hooks/useGetUser";
import { toast } from "react-toastify";
import MemberCardLoader from "../../../components/Common/MemberCardLoader";
import { useRouter } from "next/router";

const TeamMembers = () => {
  const { query } = useRouter();
  const { authUser } = useAuth();
  const { userLoading, user, userRefetch } = useGetUser(authUser?.email);

  const {
    data: team,
    isLoading: teamLoading,
    refetch: teamRefetch,
  } = useQuery({
    queryKey: ["team", query],
    queryFn: () => jwt_axios(`/team/${query?.leader}`).then((res) => res.data),
  });

  const handleAddMember = (member) => {
    const ifExist = team?.members?.filter(
      (existing_member) => existing_member?.email === member?.email
    );

    if (ifExist.length === 0) {
      jwt_axios
        .patch(`/team/${query?.leader}`, {
          members: [...team?.members, member],
        })
        .then((res) => {
          if (res.data.acknowledged) {
            jwt_axios
              .patch(`/user/${member?.email}`, {
                role: "team",
                team: [
                  ...(member?.team ? member.team : []),
                  { name: team?.name, leader: team?.leader },
                ],
              })
              .then((res) => {
                console.log(res.data);
                const memberData = {
                  memberEmail: member?.email,
                  roomName: team?.roomName,
                };
                console.log(memberData);
                fetch("https://plugged-in-server.onrender.com/addRoomMate", {
                  method: "PUT",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    memberEmail: member?.email,
                    roomName: team?.roomName,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    if (data) {
                      teamRefetch();
                      toast.success("Member Register Successfully");
                    }
                  });
              })
              .catch((error) => console.log(error));
          }
        });
    } else {
      toast.error("This user already exist");
    }
  };

  const handleDeleteCard = (email, role) => {
    if (role !== "leader") {
      const restMembers = team?.members?.filter(
        (member) => member?.email !== email
      );
      const restTeam = user?.team?.filter(
        (isTeam) => isTeam?.leader !== team?.leader
      );

      jwt_axios
        .patch(`/team/${query?.leader}`, { members: [...restMembers] })
        .then((res) => {
          if (res.data.acknowledged) {
            jwt_axios
              .patch(`/user/${email}`, { role: "basic", team: [...restTeam] })
              .then((res) => {
                teamRefetch();
                toast.success("Member Removed Successfully");
              })
              .catch((error) => console.log(error));
          }
        });
    } else {
      toast.error("Leader can't be deleted");
    }
  };

  if (userLoading || teamLoading) {
    return (
      <Teams
        title="Add Member"
        className="grid xs:grid-cols-[repeat(auto-fill,_minmax(20.5rem,_1fr))] gap-6"
      >
        {[...Array(6)].map((user, index) => (
          <MemberCardLoader key={index} />
        ))}
      </Teams>
    );
  } else {
    return (
      <Teams title="Add Member">
        {team?.leader === user?.email ? (
          <AddTeamMember handleAddMember={handleAddMember} />
        ) : (
          ""
        )}
        <div className="mt-6 grid xs:grid-cols-[repeat(auto-fill,_minmax(20.5rem,_1fr))] gap-6">
          {team?.members?.map((member, index) => (
            <Member
              key={index}
              member={member}
              handleDeleteCard={handleDeleteCard}
              team={team}
              current_user={user}
            />
          ))}
        </div>
      </Teams>
    );
  }
};

export default TeamMembers;
