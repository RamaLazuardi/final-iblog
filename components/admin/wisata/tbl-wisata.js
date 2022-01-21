import useSWR from "swr";

const hapusData = async(idWisata, namaWisata) => {
    let setuju = confirm(`Hapus Wisata : ${namaWisata}`);

    if(setuju){
        const data = {id: idWisata};
        const respon = await fetch('/api/wisata/hapus-data',{
            method: 'POST',
            body: JSON.stringify(data),
        });

        let status = await respon.json();

        if(status != null){
            location.reload();
        }
    }   
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TblWisata(){
    const { data, error } = useSWR('/api/wisata/data-wisata', fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    return(
        <div className="container">
            <div className="my-5 py-5">
                <table align='center'>
                    <thead>
                        <tr align='center'>
                            <td>Nama Wisata</td>
                            <td>Lokasi Wisata</td>
                            <td>Aksi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((wisata, x) => (
                            <tr>
                                <td key={x + 1}>{wisata.namaWisata}</td>
                                <td>{wisata.lokasiWisata}</td>
                                <td align='center'>
                                    <a onClick = {(event) => {
                                        event.preventDefault();
                                        hapusData(wisata.id, wisata.namaWisata);
                                    }}>
                                        <a className="btn bg-danger text-white">Hapus</a>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}