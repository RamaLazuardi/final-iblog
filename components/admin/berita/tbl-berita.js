import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function TblBerita(){
    const { data,error } = useSWR('/api/berita/data',fetcher);

    if(error) return <p>Ada masalah saat fetching</p>;
    if(!data) return <p>Loading</p>;
    if(data.length == 0) return <p>Belum ada berita</p>;

    return(
        <div className="container">
            <div className="container my-5 py-5">
                <table align="center">
                    <thead>
                        <tr align='center'>
                            <th>Nama Wisata</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((berita,x) => (
                            // eslint-disable-next-line react/jsx-key
                            <tr align='center'>
                                <td key={x+1}>{berita.nama}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}