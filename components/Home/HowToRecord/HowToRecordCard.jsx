import { RadioGroup } from "@headlessui/react";

const HowToRecordCard = ({ data, index }) => {
    const { title, body, btn_style } = data;

    return (
        <RadioGroup.Option value={title}>
            {({ checked }) => (
                <div className={`flex items-center rounded-lg py-4 px-2 ${checked ? "shadow-lg" : ""}`}>
                    <div className="flex flex-col items-center mr-4">
                        <div className={`flex text-xl  font-bold items-center justify-center w-10 h-10 mx-2 border rounded-full ${btn_style}`}>{index + 1}</div>
                    </div>
                    <div>
                        <h2 className="mb-1">{title}</h2>
                        <p>{body}</p>
                    </div>
                </div>
            )}
        </RadioGroup.Option>
    );
};

export default HowToRecordCard;
