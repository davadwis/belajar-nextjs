"use client";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useMutation } from "@/hooks/useMutation";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();
  const { mutate } = useMutation();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const HandleSubmit = async () => {
    const res = await mutate({
      url: `https://paace-f178cafcae7b.nevacloud.io/api/login`,
      payload,
    });
    if (!res?.success) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Email or Password",
        timer: 2000,
      });
    } else {
      Cookies.set("user_token", res?.data?.token, {
        expires: new Date(res?.data?.expires_at),
        path: "/",
      });
      router.push("/");
    }
  };
  return (
    <>
      <div className="grid w-full h-screen">
        <div className="grid justify-items-center content-center">
          <div className="grid border-2 border-gray-600 rounded-md p-8 w-96">
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@flowbite.com"
                  required
                  value={payload?.email}
                  onChange={(event) =>
                    setPayload({ ...payload, email: event.target.value })
                  }
                  type="email"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <TextInput
                  id="password"
                  required
                  value={payload?.password}
                  onChange={(event) =>
                    setPayload({ ...payload, password: event.target.value })
                  }
                  type="password"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={() => HandleSubmit()} className="w-16">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
