import Image from "next/image";

const MessageUser = ({ user, active }) => {
  const { displayName, photoURL, email, room } = user;

  return (
    <div
      className={`flex items-center px-4 py-3 transition duration-300 border-b cursor-pointer ${
        active ? "bg-base-content/10" : "hover:bg-base-content/10"
      }`}
    >
      <Image
        className="mask mask-squircle"
        src={photoURL}
        alt="username"
        width={40}
        height={40}
      />
      <div className="w-full">
        <div className="-mb-1 flex justify-between items-center">
          <h3 className="ml-2 font-semibold">{displayName}</h3>
          <p className="ml-2 text-sm">25 minutes</p>
        </div>
        <p className="ml-2 text-sm">bye</p>
      </div>
    </div>
  );
};

export default MessageUser;
