import React, { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const useSetMediaToDb = (media, user) => {
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    if (user && media) {
      fetch("https://plugged-in-server.vercel.app/userRecords", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(media),
      })
        .then((res) => res.json())
        .then((data) => setConfirmation(data));
    }
  }, [user, media]);

  return { confirmation };
};

export default useSetMediaToDb;
