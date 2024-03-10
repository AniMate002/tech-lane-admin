import SignUpPage from "@/components/Auth/SignUpPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SignUp - Tech Lane Admin",
    description: "SignUp page of Tech Lane Admin",
  };

const SignUp = () => {
    return (
        <SignUpPage />
    );
}
 
export default SignUp;