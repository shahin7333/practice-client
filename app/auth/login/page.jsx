import { cookies } from "next/headers";
import Login from "../../../components/client/auth/Login";

const page = () => {
  console.log(cookies().getAll())


  return <Login />;
};

export default page;
