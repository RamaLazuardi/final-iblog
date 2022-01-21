export default function Cover(){
    return (
        <>
        <h1 className="visually-hidden">Heroes examples</h1>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="/gambar/asd.jpg" alt="" width="72" height="72"></img>
                <h1 className="display-5 fw-bold">Wisata Trending Hari ini</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Yuk buruan kunjungi wisata-wisata yang lagi viral atau sedang rame di kunjungi hari ini, kapan lagi
                ada waktu luang untuk jalan-jalan kesini, yuk buruan enjoy liburan kamu dengan kunjungi tempat-tempat wisata diatas yaaaaaa.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a className="btn btn-success" href="/berita" role="button">Mau Scroll-scroll aja</a>
                </div>
                </div>
            </div>
        </>
    )
}