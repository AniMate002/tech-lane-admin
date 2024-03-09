import SignUpPage from "@/components/Auth/SignUpPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SignUp - Tech Lane Admin",
    description: "SignUp page of Tech Lane Admin",
  };

const SignUp = () => {
    return (
        <div className="bg-gradient-to-br from-cyan-100 to-blue-300 min-h-[100vh] flex items-center justify-center">
            <SignUpPage />
        </div>
    );
}
 
export default SignUp;