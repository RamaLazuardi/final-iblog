import DetailBerita from "../../components/admin/berita/detail-berita";
import Header from "../../components/navbar";

export async function getServerSideProps(context) {
    return { props: { id: context.params.id } };
}

const Detail = (props) => {
    return(
        <>
            <Header/>
            <DetailBerita id = {props.id}/>
        </>
    )
}
export default Detail