// withAuth.js
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";
import checkJwt from "@/helper/checkJwt";

const WithAuth = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("jwt");
    console.log(!token);

    const dataJwt = checkJwt(token);

    if (token) {
      if (!dataJwt) {
        if (router.pathname !== "/dashboard") {
          router.push("/dashboard");
        }
        return;
      }
      else if (router.pathname !== "/dashboard") {
        router.push("/dashboard");
      }
      return;
    }

  }, []);

  return children;
};

export default WithAuth;
