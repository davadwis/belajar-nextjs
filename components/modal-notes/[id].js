"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import ModalEdit from "../modal-edit/[id]";
import ModalDelete from "../modal-delete/[id]";

const ModalNotes = ({ id }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const { data } = useSWR(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`,
    fetcher
  );

  return (
    <>
      <Button
        onClick={() => props.setOpenModal("default")}
        gradientMonochrome="info"
        className="h-10 w-20"
      >
        Open
      </Button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <div className="bg-black border-2 border-gray-400 rounded-md p-4">
          <Modal.Header>
            <span className="text-white">{data?.data?.title}</span>
          </Modal.Header>

          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-400">
                {data?.data?.description}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="place-content-end">
            <ModalEdit id={data?.data?.id} />
            <ModalDelete id={data?.data?.id} />
          </Modal.Footer>
          <div className="grid justify-end py-2 pb-2">
            <p className="text-xs text-gray-400">
              Updated at: {data?.data?.updated_at}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalNotes;
