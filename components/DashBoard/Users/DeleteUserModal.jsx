import { TiWarningOutline } from "react-icons/ti";
import { toast } from "react-toastify";
import { jwt_axios } from "../../../utilities/api";
import { Button, ButtonOutline } from "../../Common/Buttons";
import Modal from "../../Common/Modal";

const DisconnectModal = ({ user, isOpen, handleClose, refetch }) => {
    const handleDelete = (id) => {
        jwt_axios
            .delete(`/user/${id}`)
            .then((res) => {
                if (res.data.acknowledged) {
                    refetch();
                    handleClose();
                    toast.success("User Deleted Successfully");
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <TiWarningOutline className="w-20 h-20 mx-auto" />
            <h3 className="text-lg text-center font-medium my-4">
                Are you sure you want to delete <br />
                {user?.name}?
            </h3>
            <div className="mx-auto w-3/4 grid grid-cols-2 gap-4">
                <Button className="w-full" onClick={() => handleDelete(user._id)}>
                    Yes
                </Button>
                <ButtonOutline onClick={handleClose}>No</ButtonOutline>
            </div>
        </Modal>
    );
};

export default DisconnectModal;
