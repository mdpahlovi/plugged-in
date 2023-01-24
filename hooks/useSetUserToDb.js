import { useEffect, useState } from "react";

const useSetUserToDb = (user) => {
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    const sendingUser = {
      email: user?.email,
      name: user?.displayName,
    };
    if (user) {
      fetch("https://plugged-in-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(sendingUser),
      })
        .then((res) => res.json())
        .then((data) => {
          setConfirmation(data);
        });
    }
  }, [user]);

  return { confirmation };
};

export default useSetUserToDb;
