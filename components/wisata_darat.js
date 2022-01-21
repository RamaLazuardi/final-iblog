import useSWR from 'swr';
import FotoWisata from './admin/wisata/foto-wisata';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function WisataDaratComp(){
    const { data, error } = useSWR('/api/wisata/data-wisata', fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;
    return (
        <div className="container">
            <div class="my-3 py-5 text-center">
                <h2>Wisata Banyuwangi</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3">
                {data.map((wisata,x) => (
                    <div className="col">
                        <FotoWisata foto = {wisata.fotoWisata} key={x+1}/>
                        <div className="card-body">
                            <p className="card-text">
                                <h5 align='center'>{wisata.namaWisata}</h5>
                                <p>
                                {wisata.lokasiWisata}
                            </p>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}