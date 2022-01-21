import { useEffect, useState } from 'react';
import { supabase } from '../../../utils/supabase/supabase-client';

const FotoWisata = ({foto}) => {
    const [fotoWisata, setFotoWisata] = useState();
    
    useEffect(
        () => {
            if(foto) downloadFoto(foto)
        }, 
        [foto]
    );

    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-wisata')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoWisata(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return fotoWisata ? (
        <center>
        <img src={fotoWisata} width='100%' height='225' />

        </center>
    ):(
        <div>
            Loading Foto...
        </div>
    )
}

export default FotoWisata;