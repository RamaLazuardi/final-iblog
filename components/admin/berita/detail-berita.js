import useSWR from "swr";
import FotoBerita from "./foto-berita";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailBerita({ id }){
    const { data, error } = useSWR(`/api/berita/detail/${id}`, fetcher);

    if(error)
        return <p>Ada masalah saat fetching data dengan ID {id}</p>;
    if (!data) return <p>Loading</p>;
    if (data.length == 0) return <p>Tidak ditemukan data dengan ID {id}</p>;

    return(
        <>
             <div className="container">
                <div className="my-3 py-5">
                    <center>
                        <h1><strong>{data.nama}</strong></h1>
                        <FotoBerita foto={data.lengkap.fotoBerita}/>
                    </center>
                    <br />
                    <div className="col">
                        <div className="card-text">
                            {data.lengkap.deskripsiBerita}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}