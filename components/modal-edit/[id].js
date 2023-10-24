"use client";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";

const ModalEdit = ({ id }) => {
  const router = useRouter();
  // const { id } = router?.query;
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal, notes, setNotes };

  const { data } = useSWR(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setNotes({
        title: data?.data?.title,
        description: data?.data?.description,
      });
    }
  }, [data]);

  const HandleSubmit = async () => {
    const response = await fetch(`http://localhost:3000/api/notes/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify(notes),
      headers: { "Content-Type": "application/json" },
    });
    if (response?.ok) {
      router.reload();
    }
    console.log(response);
  };

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("form-elements")}
        gradientMonochrome="purple"
        className="h-10 w-20"
      >
        Edit
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="md"
        popup
        onClose={() => {
          props.setOpenModal(undefined);
        }}
      >
        <div className="border-2 border-gray-500 bg-black rounded-md">
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white">Edit Notes</h3>
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
export default ModalEdit;
