"use client";
import { Button, Label, Modal } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";

const ModalCreate = () => {
  const router = useRouter();
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal, notes, setNotes };

  const HandleSubmit = async () => {
    const response = await fetch("http://localhost:3000/api/notes/create", {
      method: "POST",
      body: JSON.stringify(notes),
      headers: { "Content-Type": "application/json" },
    });
    if (response?.ok) {
      router.reload();
    }
  };

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        gradientDuoTone="purpleToBlue"
      >
        + Add Notes
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <div className="border-2 border-gray-500 bg-black rounded-md">
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white">Add Notes</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" className="text-white" />
                </div>
                <input
                  className="bg-black text-white focus:border-sky-500 w-full rounded-md"
                  type="text"
                  name="title"
                  id="title"
                  value={notes?.title}
                  onChange={(event) =>
                    setNotes({ ...notes, title: event.target.value })
                  }
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="description"
                    value="Description"
                    className="text-white"
                  />
                </div>
                <textarea
                  className="bg-black text-white focus:border-sky-500 w-full rounded-md"
                  type="text"
                  name="description"
                  id="description"
                  value={notes?.description}
                  onChange={(event) =>
                    setNotes({ ...notes, description: event.target.value })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <Button
                  onClick={() => HandleSubmit()}
                  gradientDuoTone="purpleToBlue"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};
export default ModalCreate;
