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
import TaskDetailsModal from "../../../components/DashBoard/Add Member/TaskDetailsModal";
import { useState } from "react";
import SeeRewardModal from "../../../components/DashBoard/Add Member/SeeRewardModal";
import GiveRewardModal from "../../../components/DashBoard/Add Member/GiveRewardModal";

const TeamMembers = () => {
  const { query } = useRouter();
  const { userLoading, user } = useAuth();
  const [selectedMemberTask, setSelectedMemberTask] = useState(null);
  const [seerewardMember, setSeerewardMember] = useState(null);
  const [giveRewardMember, setGiveRewardMember] = useState(null);

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
                fetch("http://localhost:5000/addRoomMate", {
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
                if (res.data) {
                  fetch(`http://localhost:5000/deleteRoomMate`, {
                    method: "PUT",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      memberEmail: email,
                      roomName: team?.roomName,
                    }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      teamRefetch();
                      toast.success("Member Removed Successfully");
                    });
                }
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
              setSelectedMemberTask={setSelectedMemberTask}
              setSeerewardMember={setSeerewardMember}
              setGiveRewardMember={setGiveRewardMember}
              team={team}
              current_user={user}
            />
          ))}
        </div>
        <TaskDetailsModal
          team={team}
          selectedMemberTask={selectedMemberTask}
          setSelectedMemberTask={setSelectedMemberTask}
        />
        <SeeRewardModal
          selectedMemberTask={seerewardMember}
          setSelectedMemberTask={setSeerewardMember}
        />
        <GiveRewardModal
          selectedMemberTask={giveRewardMember}
          giveRewardMember={giveRewardMember}
          team={team}
          setSelectedMemberTask={setGiveRewardMember}
        />
      </Teams>
    );
  }
};

export default TeamMembers;
