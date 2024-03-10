import LogInPage from "@/components/Auth/LogInPage";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Login - Tech Lane Admin",
    description: "LogIn page of Tech Lane Admin",
  };

const LogIn = () => {
    return (
        <div>
            <LogInPage />
        </div>
    );
}
 
export default LogIn;