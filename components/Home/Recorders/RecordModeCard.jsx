import { BsCaretDown } from "react-icons/bs";
import { HiOutlinePlay } from "react-icons/hi2";
import { IconButton } from "../../Common/Buttons";

const RecordModeCard = ({ icon, mode, onClick, status }) => {
    return (
        <div className="bg-base-100 shadow-lg cursor-pointer hover:text-white transition ease-in-out delay-150 hover:scale-105 hover:bg-primary duration-300 rounded-lg">
            {icon}
            <div className="card-body items-center text-center">
                <h2 className="mb-2">{mode}</h2>
                <label onClick={onClick} htmlFor={mode} className="cursor-pointer">
                    <IconButton>{status === "stop" ? <HiOutlinePlay className="text-2xl" /> : <BsCaretDown className="text-2xl translate-y-0.5" />}</IconButton>
                </label>
            </div>
        </div>
    );
};

export default RecordModeCard;
