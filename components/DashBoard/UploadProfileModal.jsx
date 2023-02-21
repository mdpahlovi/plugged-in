import { useForm } from "react-hook-form";
import { CgClose } from "react-icons/cg";
import { Button, IconButton, SpinLoader } from "../Common/Buttons";
import Modal from "../Common/Modal";

const UploadProfileModal = ({ isOpen, handleClose, user, handleProfile, updateLoading }) => {
    const { register, handleSubmit } = useForm();
    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <h2 className="mb-3 text-center">Update Your Info</h2>
            <div onClick={handleClose} className="absolute right-2 top-2">
                <IconButton>
                    <CgClose />
                </IconButton>
            </div>
            <form onSubmit={handleSubmit(handleProfile)} className="max-w-4xl space-y-3">
                <div className="form-control space-y-1.5">
                    <label className="font-bold tracking-wide">Upload Profile</label>
                    <input type="file" {...register("avatar")} className="file-input file-input-bordered file-input-primary focus:outline-none w-full" />
                </div>
                <div className="form-control space-y-1.5">
                    <label className="font-bold tracking-wide">Name</label>
                    <input type="text" {...register("name")} placeholder="name" defaultValue={user?.name} className="input" />
                </div>
                <div className="form-control space-y-1.5">
                    <label className="font-bold tracking-wide">Address</label>
                    <input type="text" {...register("address")} placeholder="Address" defaultValue={user?.address} className="input" />
                </div>
                <div className="form-control space-y-1.5">
                    <label className="font-bold tracking-wide">Contact No</label>
                    <input type="text" {...register("phone")} placeholder="Contact No" defaultValue={user?.phone} className="input" />
                </div>
                <div>
                    <Button type="submit" className="w-full mt-1">
                        {updateLoading ? <SpinLoader>Uploading</SpinLoader> : "Upload Now"}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};

export default UploadProfileModal;
