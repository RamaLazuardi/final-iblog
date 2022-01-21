import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function KumpulanNews(){
    const { data,error } = useSWR('/api/berita/data',fetcher);

    if(error) return <p>Ada masalah saat fetching</p>;
    if(!data) return <p>Loading</p>;
    if(data.length == 0) return <p>Belum ada berita</p>;

    return (
        <>
            <div className="container">
            <div class="py-5 text-center">
                <img class="d-block mx-auto mb-4" src="/gambar/asd.jpg" alt="" width="72" height="57"></img>
                <h2>Wisata Paling Ramai 1 Minggu terakhir</h2>
            </div>
                <div class="row mb-2">
                    <div>
                        {data.map((berita,x) => (
                            <div class="col-md-15">
                                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div class="col p-5 d-flex flex-column position-static">
                                        <h3 align='center' key={x + 1}>{berita.nama}</h3>
                                        <Link href={`/detail-lengkap/${berita.id}`}>
                                            <a className='btn fw-bold text-primary'>Lihat</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}