import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../Common/Buttons";
import Rating from "react-rating";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const ReviewModal = ({ isOpen, setIsOpen, handleEdit, setRating }) => {
    const { register, handleSubmit } = useForm();

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-base-100 p-6 text-left align-middle shadow-xl transition-all">
                                <form action="" onSubmit={handleSubmit(handleEdit)} className="space-y-2">
                                    <div className="flex flex-col xs:flex-row xs:justify-between gap-2">
                                        <h2>Add Your Review</h2>
                                        <Rating
                                            onChange={(value) => setRating(value)}
                                            fullSymbol={<HiStar className="text-2xl text-primary" />}
                                            emptySymbol={<HiOutlineStar className="text-2xl text-primary" />}
                                            fractions={2}
                                        />
                                    </div>
                                    <textarea
                                        {...register("details")}
                                        className="textarea textarea-bordered w-full"
                                        rows="3"
                                        placeholder="Review Details"
                                    ></textarea>
                                    <div className="flex justify-center">
                                        <Button type="submit" className="w-1/2 mx-auto">
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ReviewModal;
