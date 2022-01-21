import { supabase } from '../../utils/supabase/supabase-client';
import { useState, useEffect } from 'react';

const prosesLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    else location.replace('/');
};

const InfoAkun = () =>{
    const [username, setUsername] = useState();
    
    useEffect(async () => {
        const user = await supabase.auth.user();
        if (user) setUsername(user.email);
    });

    if (username){
        return(
            <p>
                <strong className='text-dark'>
                    {username}
                </strong>
                .{''}
                <a href='#' onClick={prosesLogout}>
                    Logout
                </a>
                <br/>
                

            </p>
        );
    } else{
        return <p>...</p>
    }
}

export default InfoAkun;