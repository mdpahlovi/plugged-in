import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import gold from "../../../public/images/feature/gold.png";
import silver from "../../../public/images/feature/silver.png";
import bronze from "../../../public/images/feature/bronze.png";

const SeeRewardModal = ({ setSelectedMemberTask, selectedMemberTask }) => {
  const { data: tasks = [] } = useQuery({
    queryKey: ["taskByUser", selectedMemberTask],
    queryFn: () =>
      fetch(
        `https://plugged-in-server.onrender.com/taskByUser?email=${selectedMemberTask?.email}`
      ).then((res) => res.json()),
  });

  return (
    <div>
      <input type="checkbox" id="seeRewardModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-lg relative">
          <label
            onClick={() => setSelectedMemberTask(null)}
            htmlFor="seeRewardModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {tasks?.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-primary rounded-lg px-5 py-2 mt-2 text-white"
            >
              <p className="text-xl font-bold">
                {task?.details.replace(/(<([^>]+)>)/gi, "")}
              </p>
              <div>
                {task?.givenReward === "gold" ? (
                  <Image
                    className="w-[30px] h-[30px]"
                    src={gold}
                    alt="gold"
                  ></Image>
                ) : task?.givenReward === "silver" ? (
                  <Image
                    className="w-[30px] h-[30px]"
                    src={silver}
                    alt="silver"
                  ></Image>
                ) : task?.givenReward === "bronze" ? (
                  <Image
                    className="w-[30px] h-[30px]"
                    src={bronze}
                    alt="bronze"
                  ></Image>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeRewardModal;
