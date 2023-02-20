import axios from "axios";
import { toast } from "react-toastify";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button, ButtonOutline } from "../../Common/Buttons";
import { TiWarningOutline } from "react-icons/ti";
import { useRouter } from "next/router";

const DeleteConfirmModal = ({
  deletingRecordId,
  setDeletingRecordId,
  refetch,
}) => {
  const { replace } = useRouter();

  const handleYes = (id) => {
    axios
      .delete(`http://localhost:5000/record/${id}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
          refetch();
          toast.success("Record deleted successfully");
          setDeletingRecordId(null);
          replace("/dashboard/recordings");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <Transition appear show={deletingRecordId ? true : false} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setDeletingRecordId(null)}
      >
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-100 p-6 space-y-4 align-middle shadow-xl transition-all">
                <TiWarningOutline className="w-20 h-20 mx-auto" />
                <Dialog.Title as="h3" className="text-lg font-medium">
                  Are you sure , you want to delete this record ?
                </Dialog.Title>
                <div className="mx-auto w-3/4 grid grid-cols-2 gap-4">
                  <Button onClick={() => handleYes(deletingRecordId)}>
                    Yes
                  </Button>
                  <ButtonOutline onClick={() => setDeletingRecordId(null)}>
                    No
                  </ButtonOutline>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteConfirmModal;
