import Login from "../components/Login/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "@firebase/auth";
import { LayoutLogin } from "../components/layouts";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();
  const [user, userLoading] = useAuthState(getAuth());
  user && !userLoading && route.push("/platform");

  return (
    <>
      {userLoading && <h1>Loading...</h1>}
      {!userLoading && <Login />}
    </>
  );
}

Home.layout = LayoutLogin;
