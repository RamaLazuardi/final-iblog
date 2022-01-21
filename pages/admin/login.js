import { useState } from "react";
import FormLogin from "../../components/admin/masuk";
import FormSignUp from "../../components/admin/daftar";

export default function LoginPage(){
    const [isLogin, setIsLogin] = useState(true);

    return(
        <>
            <div align='center'>
                {isLogin ? <FormLogin/>:<FormSignUp/>}
                {isLogin ? (
                <a>Dont have an account yet? <a href='#'onClick={() => setIsLogin(false)}>Sign Up</a>
                <p>&copy; 2017–2021</p>
                </a>
                ):(
                <a >Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a>
                                <p>&copy; 2017–2021</p>
                </a>
                )}
            </div>
        </>
    )
}