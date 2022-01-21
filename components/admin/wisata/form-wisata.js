import { Formik, Form, Field } from 'formik';
import { supabase } from '../../../utils/supabase/supabase-client';

const initFormValues={
    namaWisata: '',
    foto: null,
    lokasiWisata:'',
}

const uploadFotoWisata = async (foto) => {
    try {
        const fileExt = foto.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        let { error: uploadError } = await supabase.storage
            .from('foto-wisata') 
            .upload(filePath, foto);
        if (uploadError) {
            throw uploadError;
        } else {
            return filePath;
        }
    } catch (error) {
        alert(error.message);
    }
};

const handleOnSubmit = async(values) => {
    let url = '/api/wisata/tambah-data';
    values.fotoPath = await uploadFotoWisata(values.foto);

    const respon = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
    });

    let status = await respon.json();

    if(status != null){
        location.reload();
    }
}

export default function DataWisata(){
    return(
        <div className='container my-5 py-5'>
            <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                {({ values, isSubmitting, setFieldValue }) => (
                    <Form>
                        <table align='center'>
                            <tr>
                                <td htmlFor="foto">Foto Wisata</td>
                                <td>:</td>
                                <td>
                                    <input 
                                        type="file"
                                        name='foto'
                                        accept='image/png, image/jpeg, image/jpg,'
                                        onChange={(event) => {
                                            setFieldValue('foto', event.currentTarget.files[0]);
                                        }}
                                    />
                                    {values.foto ? (
                                        <img src={URL.createObjectURL(values.foto)}  width='250' height='175'/>
                                    ):('Belum ada foto')}
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='namaWisata'>Nama Wisata</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='namaWisata'/>
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='lokasiWisata'>Lokasi Wisata</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='lokasiWisata'/>
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
    )
}