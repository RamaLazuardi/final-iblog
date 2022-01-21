import Head from "next/head";
import FormWisata from '../../../components/admin/wisata/form-wisata';
import TblWisata from "../../../components/admin/wisata/tbl-wisata";
import Header from "../../../components/admin/navbar";

export default function Home(){
    return(
        <div>
            <Head>
                <title>Admin</title>
            </Head>
            <Header/>
            <TblWisata/>
            <FormWisata/>
        </div>
    )
}