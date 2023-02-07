import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../Common/Buttons";

const ReviewModal = ({ isOpen, setIsOpen, handleEdit }) => {
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all">
                                <form action="" onSubmit={handleSubmit(handleEdit)} className="space-y-2">
                                    <div className="flex justify-between">
                                        <h2>Add Your Review</h2>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-indigo-900" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-indigo-900" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-indigo-900" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-indigo-900" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-indigo-900" />
                                        </div>
                                    </div>
                                    <textarea
                                        {...register("details")}
                                        className="textarea textarea-bordered w-full"
                                        rows="3"
                                        placeholder="Recording Details"
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
