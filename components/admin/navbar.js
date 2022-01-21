import InfoAkun from "./account";

export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="/gambar/asd.jpg" width={35} height={34}/>
          <a className="navbar-brand" href="/">i-Blog</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/user/">Home User</a>
              </li>
            </ul>
            <ul className="navbar-nav me-2">
              <li className="nav-item">
                <a className="nav-link" href="/admin/">Home</a>
              </li>
            </ul>
            <div className="dropdown me-3">
                    <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Berita
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/admin/berita/">Tambah Berita</a></li>
                    </ul>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown">
                    <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Wisata
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/admin/wisata/">Tambah Wisata</a></li>
                    </ul>
            </div>
            </ul>
            
            
            <form className="d-flex">
              <InfoAkun/>
            </form>
          </div>
        </div>
      </nav>
    )
}