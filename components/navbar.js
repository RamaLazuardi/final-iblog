export default function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="/gambar/asd.jpg" width={40} height={34}/>
          <a className="navbar-brand"> i-Blog</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/berita">Berita</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/darat">Wisata</a>
              </li>
            </ul>
            <form className="d-flex">
              <a className="btn btn-outline-success" href="/admin/">Login</a>
            </form>
          </div>
        </div>
      </nav>
    )
}