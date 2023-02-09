import Image from "next/image";
import useGetUser from "../../../hooks/useGetUser";
import { Button, ButtonOutline, IconButton } from "../../Common/Buttons";
import NoPhoto from "../../../public/images/no-photo.jpg";
import { MdDeleteSweep } from "react-icons/md";
import MemberCardLoader from "../../Common/MemberCardLoader";

const Member = ({ member, handleDeleteCard, team, current_user }) => {
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
                    <div className="mt-3 flex space-x-4">
                        <Button>Add Friend</Button>
                        <ButtonOutline> Message</ButtonOutline>
                    </div>
                </div>
            </div>
        );
    }
};

export default Member;
