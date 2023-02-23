import { Collapse } from "react-collapse";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const FaqCard = ({ open, toggle, question, answer }) => {
    return (
        <div className="border rounded-lg">
            <div className={`pt-4 ${open ? "pb-2" : "pb-4"} px-6 flex justify-between items-center cursor-pointer gap-4`} onClick={toggle}>
                <h2>{question}</h2>
                <div className="text-3xl">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
            </div>
            <Collapse isOpened={open}>
                <p className="px-8 pb-4">{answer}</p>
            </Collapse>
        </div>
    );
};

export default FaqCard;
