import { Dialog, Transition } from "@headlessui/react";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "next-share";
import React, { Fragment, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { CgClose } from "react-icons/cg";
import { MdContentCopy, MdOutlineFileDownloadDone } from "react-icons/md";
import { IconButton } from "../../Common/Buttons";

const ShareModal = ({ shareMedia, setShareMedia }) => {
    const [copy, setCopy] = useState(false);

    return (
        <Transition appear show={shareMedia?._id ? true : false} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setShareMedia(null)}>
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
                                <Dialog.Title as="div">
                                    <h2 className="-mt-2 mb-4">Share this media</h2>
                                    <label className="absolute right-2 top-2">
                                        <IconButton onClick={() => setShareMedia(null)}>
                                            <CgClose />
                                        </IconButton>
                                    </label>
                                </Dialog.Title>
                                <div>
                                    <p>Share this link via</p>
                                    <div className="mt-2 mb-4 flex justify-around gap-4">
                                        <EmailShareButton url={shareMedia?.mediaUrl}>
                                            <EmailIcon onClick={() => setShareMedia(null)} size={36} round />
                                        </EmailShareButton>
                                        <FacebookMessengerShareButton url={shareMedia?.mediaUrl}>
                                            <FacebookMessengerIcon onClick={() => setShareMedia(null)} size={36} round />
                                        </FacebookMessengerShareButton>
                                        <FacebookShareButton url={shareMedia?.mediaUrl} quote={shareMedia?.title}>
                                            <FacebookIcon onClick={() => setShareMedia(null)} size={36} round />
                                        </FacebookShareButton>
                                        <LinkedinShareButton url={shareMedia?.mediaUrl}>
                                            <LinkedinIcon onClick={() => setShareMedia(null)} size={36} round />
                                        </LinkedinShareButton>
                                        <WhatsappShareButton url={shareMedia?.mediaUrl} title={shareMedia?.title}>
                                            <WhatsappIcon onClick={() => setShareMedia(null)} size={36} round />
                                        </WhatsappShareButton>
                                        <TelegramShareButton url={shareMedia?.mediaUrl} title={shareMedia?.title}>
                                            <TelegramIcon onClick={() => setShareMedia(null)} size={36} round />
                                        </TelegramShareButton>
                                    </div>
                                    <p>Or copy link</p>
                                    <div className="mt-2 px-4 py-2 bg-base-content/5 rounded-lg shadow-inner flex items-center gap-2">
                                        <div className="text-ellipsis overflow-hidden">{shareMedia?.mediaUrl}</div>
                                        <div className="flex items-center">
                                            <CopyToClipboard text={shareMedia?.mediaUrl} onCopy={() => setShareMedia(null)}>
                                                <IconButton>
                                                    <MdContentCopy className={`${shareMedia ? "" : "hidden"}`} />
                                                    <MdOutlineFileDownloadDone className={`${shareMedia ? "hidden" : ""}`} />
                                                </IconButton>
                                            </CopyToClipboard>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ShareModal;
