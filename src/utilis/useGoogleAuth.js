import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const useGoogleAuth = () => {

    const { googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const notify = () => toast.success("Login Successfully!");
    const notifyGoogle = (e) => toast.success(e);



    const handleGoogleLogin = () => {

        googleSignIn()
            .then((res) => {
                console.log(res.user.emailVerified);

                if (res.user.emailVerified) {
                    notify();
                    notifyGoogle(res.user.displayName)
                    navigate('/registration')
                }
            })

    }

    return { handleGoogleLogin }
};

export default useGoogleAuth;

