import Image from "next/image";
import useGetUser from "../../hooks/useGetUser";

export default function Author({ email, children, width, height }) {
    const { userLoading, user } = useGetUser(email);

    if (userLoading) {
        return (
            <div className="flex space-x-4 animate-pulse">
                <div className={`bg-base-content/10 rounded-full`} style={{ width: `${width}px`, height: `${height}px` }} />
                <div className="space-y-1.5">
                    <h4 className="bg-base-content/10 h-6 w-24 rounded"></h4>
                    <p className="bg-base-content/10 h-4 w-32 rounded"></p>
                    {children}
                </div>
            </div>
        );
    } else {
        const { name, avatar, address } = user;
        return (
            <div className="flex space-x-4">
                <div>
                    <Image src={avatar} alt="" width={width} height={height} className="rounded-full" />
                </div>
                <div>
                    <h5 className="font-bold">{name}</h5>
                    <p className="text-sm">{address}</p>
                    {children}
                </div>
            </div>
        );
    }
}
