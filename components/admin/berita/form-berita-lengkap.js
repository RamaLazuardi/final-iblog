import { Formik, Form, Field } from 'formik';
import { supabase } from '../../../utils/supabase/supabase-client';

const initFormValues = {
    namaBerita : '',
    deskripsiBerita : '',
    foto: null,
}

const uploadFotoBerita = async (foto) => {
    try {
        const fileExt = foto.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        let { error: uploadError } = await supabase.storage
            .from('foto-berita')
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
    

const handleOnSubmit = async (values) => {
    let url = '/api/berita/tambah-data-lengkap';
    values.fotoPath = await uploadFotoBerita(values.foto);
    const respon = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(values),
    });

    let status = await respon.json();

    if(status != null){
        location.reload();
    }
}

const CustomInputComponent = (props) => (
    <textarea className="my-custom-input" type="textarea" {...props} />
)
export default function FormLengkap(){
    return(
        <div className='container my-5 py-5'>
            <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                {({ values, isSubmitting, setFieldValue }) => (
                    <Form>
                        <table align='center'>
                            <tr>
                                <td htmlFor="foto">Foto Berita</td>
                                <td>:</td>
                                <td>
                                    <input
                                        type='file'
                                        name='foto'
                                        accept='image/png, image/jpeg, image/jpg'
                                        onChange={(event) => {
                                            setFieldValue('foto', event.currentTarget.files[0])
                                        }}
                                    />
                                    {values.foto ? (
                                        <img src={URL.createObjectURL(values.foto)} width="100px"/>
                                    ):(
                                        'No photos selected'
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='namaBerita'>Nama Berita</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='namaBerita'/>
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='deskripsiBerita'>Deskripsi</td>
                                <td>:</td>
                                <td>
                                    <Field name='deskripsiBerita' as={CustomInputComponent}/>
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