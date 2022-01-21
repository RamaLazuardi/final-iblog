import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/supabase-client";

export default function FotoBerita ({ foto }) {
    const [fotoBerita, setFotoBerita] = useState();

    useEffect(() => {
        if(foto) downloadFoto(foto);
    },[foto]);

    const downloadFoto = async (path) => {
        try {
            const { data, error } = await supabase.storage
                .from('foto-berita')
                .download(path);
            if(error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoBerita(url);
        } catch(error){
            console.log('Error Download Image: ', error.message);
        }
    };
    return fotoBerita ? (
        <img src={fotoBerita} width='800' height='500'/>
    ): (
        <div>Loading</div>
    );
};