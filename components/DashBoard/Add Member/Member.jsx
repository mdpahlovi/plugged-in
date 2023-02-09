import Image from "next/image";

const Member = ({ member }) => {
    const { name, avatar, role, email } = member;

    return (
        <div className="card w-max rounded-lg bg-base-100 shadow-lg">
            <Image src={avatar} alt="" className="rounded-t-lg" width={200} height={200} />
            <div className="card-body">
                <h2>{name}</h2>
                <p>{email}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Member;
