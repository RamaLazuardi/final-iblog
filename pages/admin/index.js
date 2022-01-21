import Head from "next/head";
import CoverAdmin from "../../components/admin/cover";
import Header from "../../components/admin/navbar";
import { useState,useEffect } from "react";
import { supabase } from "../../utils/supabase/supabase-client";
export default function Home(){
    const [isAuth, setIsAuth] = useState(false);

    
    useEffect(() => cekUser());
    const cekUser = async () => {
        const session = await supabase.auth.session();
    
        if (session == null) location.replace('/admin/login');
        else setIsAuth(true);
    };

    if (isAuth) {
        return(
            <div>
                <Head>
                    <title>
                        Admin
                    </title>
                </Head>
                <Header/>
                <CoverAdmin/>
            </div>
        )
    }else{
        return <p>Authentication account...</p>;
    }
}