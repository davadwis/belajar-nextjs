import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { GrNotes } from "react-icons/gr";

const Content = () => {
  return (
    <>
      <div className="w-full m-auto ">
        <div className="grid p-4 font-light text-2xl w-1/2 m-auto place-content-center text-center justify-items-center pt-36 mb-20">
          <h1 className="font-semibold text-4xl text-gray-800">
            Tingkatkan produktivitasmu dengan Notes, tempat terbaik untuk
            mencatat ide dan memanage tugas harian
          </h1>
          <div className="grid md:grid-cols-2 place-content-center justify-items-center items-center mb-20">
            <div className="mt-6 md:mt-0">
              <Link href="/notes">
                <Button gradientDuoTone="purpleToBlue" size="xl">
                  Notes
                  <GrNotes className="mx-auto ml-2 text-white" />
                </Button>
              </Link>
            </div>
            <div>
              <Image src="/notes.png" width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
