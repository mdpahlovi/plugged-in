import { CgClose } from "react-icons/cg";
import { TfiFaceSad } from "react-icons/tfi";
import { IconButton } from "../../Common/Buttons";

const MobileScreen = () => {
    return (
        <div>
            <input type="checkbox" id="Screen Record" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box rounded-lg max-w-sm relative">
                    <label htmlFor="Screen Record" className="absolute right-2 top-2">
                        <IconButton>
                            <CgClose />
                        </IconButton>
                    </label>
                    <div className="text-center space-y-2">
                        <TfiFaceSad className="mx-auto text-6xl" />
                        <h2>Sorry!</h2>
                        <h3>
                            It isn&apos;t possible to record your screen in mobile when javascript as core language. Please, use your desktop browser. Thank You
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileScreen;
