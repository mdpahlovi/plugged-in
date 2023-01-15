import { Collapse } from "react-collapse";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const FaqCard = ({ open, toggle, question, answer }) => {
    return (
        <div className="border rounded-lg">
            <div className="py-4 px-6 flex justify-between items-center cursor-pointer" onClick={toggle}>
                <h2>{question}</h2>
                <div className="text-3xl">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
            </div>
            <Collapse isOpened={open}>
                <div className="px-12 pb-6 opacity-70">{answer}</div>
            </Collapse>
        </div>
    );
};

export default FaqCard;
