"use client";
import Link from "next/link";
import { Dropdown } from "flowbite-react";
import { HiLogout } from "react-icons/hi";
import { useQueries } from "@/hooks/useQueries";
import Cookies from "js-cookie";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { data } = useQueries({
    prefixUrl: "https://paace-f178cafcae7b.nevacloud.io/api/user/me",
    headers: {
      Authorization: `Bearer ${Cookies.get("user_token")}`,
    },
  });

  const { mutate } = useMutation();

  const HandleLogout = async () => {
    const res = await mutate({
      url: "https://paace-f178cafcae7b.nevacloud.io/api/logout",
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("user_token")}`,
      },
    });
    if (!res?.success) {
      console.log("Gagal Logout");
    } else {
      Cookies.remove("user_token");
      router.push("/login");
    }
  };

  console.log(data);
  return (
    <>
      <nav className="border fixed z-20 w-full top-0 shadow-xl shadow-sky-500/50 border-transparent backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 h-[64px]">
          <div
            className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex justify-center gap-4 p-4 md:p-0 text-2xl rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/notes"
                  className="font-light block rounded md:hover:bg-transparent md:hover:text-primary md:p-0 hover:text-sky-500"
                >
                  Notes
                </Link>
              </li>
              <li className="font-light">
                <Dropdown label={data?.data?.name} inline>
                  <Dropdown.Header>
                    <span className="block text-sm">{data?.data?.name}</span>
                    <span className="block truncate text-sm font-medium">
                      {data?.data?.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item icon={HiLogout} onClick={() => HandleLogout()}>
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
