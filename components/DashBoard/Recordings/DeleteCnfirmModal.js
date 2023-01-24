import React from "react";
import { toast } from "react-toastify";

const DeleteCnfirmModal = ({ deletingRecord, setDeletingRecord, refetch }) => {
  const { _id, date, mediaType, mediaUrl, details, title } = deletingRecord;

  const handleYes = () => {
    fetch(`https://plugged-in-server.vercel.app/record/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Record deleted successfully");
          setDeletingRecord(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <label htmlFor="deleteModal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure , you want to delete this record ?
          </h3>
          <div className="mt-10">
            <button onClick={handleYes} className="btn btn-primary w-1/2">
              Yes
            </button>
            <button
              onClick={() => setDeletingRecord(null)}
              className="btn btn-ghost w-1/2"
            >
              No
            </button>
          </div>
        </label>
      </label>
    </div>
  );
};

export default DeleteCnfirmModal;
