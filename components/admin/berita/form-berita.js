import { Formik,Field,Form } from 'formik';

const initFormValues ={
    nama: '',
}

const handleOnSubmit = async (values) => {
    const respon = await fetch('/api/berita/tambah-data', {
        method: 'POST',
        body: JSON.stringify(values),
    });
    let status = await respon.json();

    if (status != null) {
        location.reload();
    }
};

export default function FormBerita(){
    return(
        <div>
            <div className='container my-5 py-5'>
                <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                    {({ isSubmitting }) => (
                        <Form>
                            <table align='center'>
                                <tr>
                                    <td htmlFor='nama'>Nama Berita</td>
                                    <td>:</td>
                                    <td>
                                        <Field type='text'name='nama'/>
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <center>
                                <button type='submit' disabled={isSubmitting}>
                                    Tambah
                                </button>
                            </center>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
};

