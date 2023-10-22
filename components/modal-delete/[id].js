"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/router";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ModalDelete = ({ id }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const router = useRouter();

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:3000/api/notes/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response?.ok) {
      router.reload();
    }
  };

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("pop-up")}
        gradientMonochrome="failure"
        className="h-10 w-20"
      >
        Delete
      </Button>

      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
        className="grid place-content-center justify-items-center items-center"
      >
        <div className="bg-black border-2 border-gray-400 rounded-md">
          <Modal.Header />
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400" />
          <Modal.Body>
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-400">
                Are you sure you want to delete this notes?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  gradientMonochrome="failure"
                  onClick={() => handleDelete()}
                >
                  Yes, I'm sure
                </Button>
                <Button
                  color="gray"
                  onClick={() => props.setOpenModal(undefined)}
                >
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default ModalDelete;
