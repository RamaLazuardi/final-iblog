import Head from "next/head";
import FormBerita from "../../../components/admin/berita/form-berita-lengkap";
import TblBerita from "../../../components/admin/berita/tbl-berita";
import Header from "../../../components/admin/navbar";

export default function Home(){
    return(
        <div>
            <Head>
                <title>Admin</title>
            </Head>
            <Header/>
            <TblBerita/>
            <FormBerita/>
        </div>
    )
}