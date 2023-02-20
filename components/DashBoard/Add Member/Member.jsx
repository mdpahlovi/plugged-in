import Image from "next/image";
import useGetUser from "../../../hooks/useGetUser";
import { Button, ButtonOutline, IconButton } from "../../Common/Buttons";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { MdDeleteSweep } from "react-icons/md";
import MemberCardLoader from "../../Common/MemberCardLoader";

const Member = ({ member, handleDeleteCard, team, current_user, setSelectedMemberTask, setSeerewardMember, setGiveRewardMember }) => {
    const { role, email } = member;
    const { userLoading, user } = useGetUser(email);

    if (userLoading) {
        return <MemberCardLoader />;
    } else {
        const { avatar, name } = user;

        return (
            <div className="relative border rounded-lg">
                {team?.leader === current_user?.email ? (
                    <div className="absolute top-4 right-4">
                        <IconButton onClick={() => handleDeleteCard(email, role)}>
                            <MdDeleteSweep className="text-lg" />
                        </IconButton>
                    </div>
                ) : (
                    ""
                )}
                <div className="flex flex-col items-center py-8 px-8">
                    <Image className="mb-3 rounded-full shadow-lg" src={avatar ? avatar : NoPhoto} alt="" width={112} height={112} />
                    <h2 className="text-center">
                        {name} <span className="-translate-y-1.5 badge badge-accent">{role}</span>
                    </h2>
                    <p>{email}</p>
                    <div className="mt-3 w-4/5 xs:w-auto grid xs:grid-cols-[auto_auto] gap-4">
                        <Button className={"cursor-pointer p-0"}>
                            <label onClick={() => setSelectedMemberTask(member)} htmlFor="taskDetailsModal" className="w-full cursor-pointer">
                                Task Details
                            </label>
                        </Button>
                        {email === team?.leader && current_user?.email === team?.leader ? (
                            <ButtonOutline className={"cursor-pointer p-0"}>
                                <label htmlFor="seeRewardModal" className="w-full cursor-pointer" onClick={() => setSeerewardMember(member)}>
                                    See Rewards
                                </label>
                            </ButtonOutline>
                        ) : current_user?.email === team?.leader ? (
                            <ButtonOutline className={"cursor-pointer p-0"}>
                                <label htmlFor="giveRewardModal" className="w-full cursor-pointer" onClick={() => setGiveRewardMember(member)}>
                                    Give Rewards
                                </label>
                            </ButtonOutline>
                        ) : (
                            <ButtonOutline className={"cursor-pointer p-0"}>
                                <label htmlFor="seeRewardModal" className="w-full cursor-pointer" onClick={() => setSeerewardMember(member)}>
                                    See Rewards
                                </label>
                            </ButtonOutline>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

export default Member;
